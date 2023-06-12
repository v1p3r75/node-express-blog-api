import { Request, Response } from "express"

export type Result = Object[] | Object | { error: string }

export type IController = (req : Request, res : Response) => any

