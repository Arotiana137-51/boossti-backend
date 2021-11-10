import { Schema } from 'mongoose';

interface AppSyncIdentityCognito {
  sub: string;
  issuer: string;
  username: string;
  claims: any;
  sourceIp: string[];
  defaultAuthStrategy: string;
  groups: string[] | null;
  'custom:_id': string;
  name: string;
  picture: string;
}

export interface IIdentity {
  claims: AppSyncIdentityCognito;
}

export type AppSyncEvent = {
  info: {
    fieldName: string;
  };
  arguments: any;
  identity: IIdentity;
};

export interface ISchema {
  createdBy: Schema.Types.ObjectId;
  updatedBy?: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface IMedia {
  url: string;
  caption: string;
}
