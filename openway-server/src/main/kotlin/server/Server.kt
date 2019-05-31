@file:JvmName("Server")

package server

import io.ktor.application.call
import io.ktor.application.install
import io.ktor.features.CallLogging
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.http.content.resource
import io.ktor.http.content.resources
import io.ktor.http.content.static
import io.ktor.request.receiveChannel
import io.ktor.response.respond
import io.ktor.response.respondText
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.routing
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import kotlinx.coroutines.io.readUTF8Line
import kotlinx.serialization.UnstableDefault
import kotlinx.serialization.json.Json
import kotlinx.serialization.list
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.slf4j.event.Level
import java.io.File
import java.util.*

const val STATIC_ROUTE = "/static"
const val RESOURCE_STATIC = "static/static"
const val RESOURCE_INDEX = "static/index.html"

@UnstableDefault
fun main() {
    val path = File("db").absolutePath
    val db = Database.connect("jdbc:h2:file:$path;", driver = "org.h2.Driver")
    db.initDatabase()
    println()
    println("http://localhost:7999/")
    println("login: admin, password: admin")
    println()
    val server = embeddedServer(Netty, port = 7999) {
        install(CallLogging) {
            level = Level.TRACE
        }
        
        routing {
            static {
                resource("/", RESOURCE_INDEX)
                
                static(STATIC_ROUTE) {
                    resources(RESOURCE_STATIC)
                }
            }
            
            get("/sign-in") {
                try {
                    val header = call.request.headers[HttpHeaders.Authorization]!!.substringAfter("Basic ")
                    val decoded = String(Base64.getDecoder().decode(header))
                    val (login, password) = decoded.split(':')
                    val hash = hashPassword(password)
                    val records = transaction(db) {
                        val found = Admins.select {
                            (Admins.login eq login) and (Admins.hashPassword eq (hash))
                        }.any()
                        if (!found) {
                            error("Not found")
                        }
                        Records.selectAll().map {
                            Record(
                                    interests = it[Records.interests].split('\n'),
                                    admission = it[Records.admission],
                                    date = it[Records.date],
                                    department = it[Records.department],
                                    email = it[Records.email],
                                    english = it[Records.english],
                                    faculty = it[Records.faculty],
                                    other = it[Records.other],
                                    knowledge = it[Records.knowledge],
                                    name = it[Records.name],
                                    surname = it[Records.surname],
                                    university = it[Records.university],
                                    experience = it[Records.experience],
                                    inform = it[Records.inform]
                            )
                        }
                    }
                    val out = Json.stringify(Record.serializer().list, records)
                    call.respondText(
                            out,
                            ContentType.Application.Json,
                            HttpStatusCode.OK
                    )
                } catch (ex: Throwable) {
                    println(ex)
                    call.respond(HttpStatusCode.Unauthorized)
                }
            }
            post("/update") {
                try {
                    val channel = call.receiveChannel()
                    var body = ""
                    while (!channel.isClosedForRead) {
                        body += channel.readUTF8Line() ?: ""
                    }
                    println(body)
                    val newRecord = Json.parse(Record.serializer(), body)
                    transaction(db) {
                        Records.insert {
                            it[admission] = newRecord.admission
                            it[date] = newRecord.date
                            it[department] = newRecord.department
                            it[email] = newRecord.email
                            it[english] = newRecord.english
                            it[faculty] = newRecord.faculty
                            it[other] = newRecord.other
                            it[knowledge] = newRecord.knowledge
                            it[name] = newRecord.name
                            it[surname] = newRecord.surname
                            it[university] = newRecord.university
                            it[interests] = newRecord.interests.joinToString(separator = ", \n")
                        }
                    }
                    call.respond(HttpStatusCode.OK)
                } catch (ex: Throwable) {
                    println(ex)
                    call.respond(HttpStatusCode.BadRequest)
                }
            }
        }
        Unit
    }
    server.start(wait = true)
}