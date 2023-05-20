import {Contact} from '@app/entities/contact.entities';
import axios from 'axios';

export const getGeneratedData = async (): Promise<Array<Contact>> => {
  const response = await axios.get(
    'https://6468eaee60c8cb9a2cb557e4.mockapi.io/contact-exampe',
  );
  const data = (await response.data) as Array<Contact>;
  return data;
};
