import {Realm} from '@realm/react';

export class Contact extends Realm.Object<Contact> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  title?: string;
  company?: string;
  email?: string;
  phoneNumber!: string;
  linkedIn?: string;
}
