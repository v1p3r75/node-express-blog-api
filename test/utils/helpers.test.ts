require('dotenv').config()
import { getEnv } from '../../src/utils/helper.utils'

describe('Helpers function Test', () => {

    describe('getEnv()', () => {

        it('should return a valid server port', () => {

            const serverPort = process.env.PORT || "8080";
            expect(getEnv('PORT')).toBe(serverPort)
        })

        it('should return a default port', () => {

            delete process.env.PORT;
            const defaultPort = "9000";
            expect(getEnv('PORT', defaultPort)).toBe(defaultPort)
        })
    })

})