import org.h2.security.SHA256
import org.jetbrains.exposed.dao.IdTable
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction

val db by lazy {
    Database.connect("jdbc:h2:mem:test?DATABASE_TO_UPPER=false;", driver = "org.h2.Driver").also {
        it.initDatabase()
    }
}

fun <T> tx(statement: Transaction.() -> T) = transaction(db, statement)

fun Database.initDatabase() {
    transaction(this) {
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

object Admins : Table() {
    val login = varchar("login", 255)
    val hashPassword = varchar("hash", 255)
}

object Records : IdTable<Long>() {
    override val id = long("id").autoIncrement().primaryKey().entityId()
    val name = varchar("name", 255)
    val surname = varchar("surname", 255)
    val birthDate = date("birthDate")
    val yearAlumni = date("yearAlumni").nullable()
    val university = varchar("university", 255)
    val interests = enumeration("interests", Interests::class)
}

enum class Interests {
    ZOPA
}