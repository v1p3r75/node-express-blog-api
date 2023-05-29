import { PrismaClient } from "@prisma/client";

class Database {

    protected instance : PrismaClient | null = null;

    public get() {

        if (! this.instance) {
            this.instance = new PrismaClient()
        }

        return this.instance
    }
}

export default Database;