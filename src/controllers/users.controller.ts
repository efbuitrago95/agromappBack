import {Request, Response} from "express";
import UserModel from "../models/users.model";

export default class UserController {

    public getAll = async (req: Request, res: Response) => {
        UserModel.query()
            .eager('[permissions, countries.[languages]]')
            .then(data => {
                res.status(200).send(data);
            }).catch((error: any) => {
                res.status(200).send(error);
            });
    };

    public create = async (req: Request, res: Response) => {
        UserModel.query()
            .insert(req.body)
            .then((data) => {
                res.status(200).send(data);
            }).catch((e: any) => {
                res.status(400).send(e);
            });
    };

    public getById = async (req: Request, res: Response) => {
        UserModel.query()
            .eager('[permissions, countries.[languages]]')
            .findById(req.params.id)
            .then(data => {
                res.status(200).send(data);
            }).catch((error: any) => {
                res.status(200).send(error);
            });
    };

    public update = async (req: Request, res: Response) => {
        UserModel.query()
            .patchAndFetchById(req.body.id, req.body)
            .then(res1 => {
                res.status(200).send(res1);
            }).catch((e: any) => {
                res.status(200).send(e);
            });
    };

    public deletedbyId = async (req: Request, res: Response) => {
        UserModel.query()
            .deleteById(req.params.id)
            .then(data => {
                res.status(200).send(data);
            }).catch((error: any) => {
                res.status(200).send(error);
            });
    };
}
