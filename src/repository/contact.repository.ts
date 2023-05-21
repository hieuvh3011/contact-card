import rnfs from 'react-native-fs';
import {ContactEntities} from '@app/entities/contact.entities';
import FileViewer from 'react-native-file-viewer';
import vCard from 'react-native-vcards';

export const exportContact = async (contact: ContactEntities) => {
  const card = parseContactToVCardObject(contact);
  const filePath = saveVCardToFile(contact, card);

  FileViewer.open(filePath).catch(error => {
    console.error('error open file vfc = ', error);
  });
};

const parseContactToVCardObject = (contact: ContactEntities) => {
  const card = vCard();
  card.firstName = contact.firstName;
  card.lastName = contact.lastName;
  card.middleName = contact.middleName;
  card.cellPhone = contact.workPhone;
  card.email = contact.email;
  card.title = contact.title;
  card.organization = contact.company;
  card.socialUrls.linkedIn = contact.linkedIn;
  return card;
};

const saveVCardToFile = (contact: ContactEntities, card: any): string => {
  const documentPath = rnfs.DocumentDirectoryPath;
  const filePath = `${documentPath}/${contact.firstName}-${contact.firstName}-${contact.lastName}.vcf`;
  card.saveToFile(`${filePath}`);
  return filePath;
};
