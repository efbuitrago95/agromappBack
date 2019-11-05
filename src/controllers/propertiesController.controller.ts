import {Request, Response} from "express";
import propertiesModel from "../models/properties.model";


export default class PropertiesController {

    public getAll = async (req: Request, res: Response) => {
        propertiesModel.query()
            .eager('[languages,items.crop_items]')
            .then(data => {
                res.status(200).send(data);
            }).catch((error: any) => {
                res.status(200).send(error);
            });
    };

    public create = async (req: Request, res: Response) => {
        propertiesModel.query()
            .insert(req.body)
            .then((data) => {
                res.status(200).send(data);
            }).catch((e: any) => {
                res.status(400).send(e);
            });
    };

    public getById = async (req: Request, res: Response) => {
        propertiesModel.query()
            .eager('[items.crop_items]')
            .findById(req.params.id)
            .then(data => {
                res.status(200).send(data);
            }).catch((error: any) => {
                res.status(200).send(error);
            });
    };

    public update = async (req: Request, res: Response) => {
        propertiesModel.query()
            .patchAndFetchById(req.body.id, req.body)
            .then(res1 => {
                res.status(200).send(res1);
            }).catch((e: any) => {
                res.status(200).send(e);
            });
    };

    public deletedbyId = async (req: Request, res: Response) => {
        propertiesModel.query()
            .deleteById(req.params.id)
            .then(data => {
                res.status(200).send(data);
            }).catch((error: any) => {
                res.status(200).send(error);
            });
    };

    public getPropertiesByCropId = async (req: Request, res: Response) => {
        propertiesModel.query()
            .eager('[items.crop_items]')
            .modifyEager('items.crop_items ', (builder: any) => {
                builder.where('idCrop', req.params.id);
            }).then(data => {
                res.status(200).send(data);
            }).catch((error: any) => {
                res.status(200).send(error);
            });
    }
}
