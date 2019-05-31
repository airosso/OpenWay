package server

import kotlinx.serialization.Serializable
import org.h2.security.SHA256
import org.jetbrains.exposed.dao.IdTable
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction

fun Database.initDatabase() {
    transaction(this) {
        addLogger(StdOutSqlLogger)
        SchemaUtils.create(Records, Admins)
        Admins.insert {
            it[login] = "admin"
            it[hashPassword] = hashPassword("admin")
        }
    }
}

fun hashPassword(password: String): String {
    return SHA256.getHash(password.toByteArray(), false).toString(Charsets.UTF_8)
}

object Admins : Table("Admins") {
    val login = varchar("login", 255)
    val hashPassword = varchar("hash", 255)
}

@Serializable
data class Record(
        val name: String,
        val surname: String,
        val date: String,
        val university: String,
        val interests: List<String>,
        val email: String,
        val faculty: String,
        val department: String,
        val english: String,
        val other: String?,
        val knowledge: String,
        val experience: String?,
        val inform: String?,
        val admission: String,
        val agreement: Boolean
)

object Records : IdTable<Long>("Records") {
    override val id = long("id").autoIncrement().primaryKey().entityId()
    val name = varchar("name", 255)
    val surname = varchar("surname", 255)
    val email = varchar("email", 255)
    val date = varchar("date", 255)
    val university = varchar("university", 255)
    val interests = varchar("interests", 255)
    val faculty = varchar("faculty", 255)
    val department = varchar("department", 255)
    val english = varchar("english", 255)
    val other = varchar("other", 255).nullable()
    val knowledge = varchar("knowledge", 255)
    val experience = varchar("experience", 255).nullable()
    val inform = varchar("inform", 255).nullable()
    val admission = varchar("admission", 255)
    val agreement = bool("agreement")
}