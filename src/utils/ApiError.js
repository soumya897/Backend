class ApiError extends Error {
    constructor(
        stausCode,
        message = "something went wrong",
        errors = [],
        stack = ""


    ) {
        super(message)
        this.statusCode = stausCode
        this.data = null
        this.message = message
        this.errors = errors
        this.success = false

        if (stack) {
            this.stack = stack
        } else {
            this.captureStackTrace(this, this.constructor)
        }

    }
}

export{ApiError}