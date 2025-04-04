import { Request, Response } from "express";

export const getChats = async (req: Request, res: Response) => {
    try {
        res.send("Hello World");
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
