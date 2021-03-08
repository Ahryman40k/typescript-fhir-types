import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_code} from '../Scalar/RTTI_code';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_base64Binary} from '../Scalar/RTTI_base64Binary';
import {RTTI_url} from '../Scalar/RTTI_url';
import {RTTI_unsignedInt} from '../Scalar/RTTI_unsignedInt';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';

export interface IAttachment {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
   * Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.
   */
  contentType?: string;

  /**
   * Extensions for contentType
   */
  _contentType?: IElement;

  /**
   * The human language of the content. The value can be any valid value according to BCP 47.
   */
  language?: string;

  /**
   * Extensions for language
   */
  _language?: IElement;

  /**
   * The actual data of the attachment - a sequence of bytes, base64 encoded.
   */
  data?: string;

  /**
   * Extensions for data
   */
  _data?: IElement;

  /**
   * A location where the data can be accessed.
   */
  url?: string;

  /**
   * Extensions for url
   */
  _url?: IElement;

  /**
   * The number of bytes of data that make up this attachment (before base64 encoding, if that is done).
   */
  size?: number;

  /**
   * Extensions for size
   */
  _size?: IElement;

  /**
   * The calculated hash of the data using SHA-1. Represented using base64.
   */
  hash?: string;

  /**
   * Extensions for hash
   */
  _hash?: IElement;

  /**
   * A label or set of text to display in place of the data.
   */
  title?: string;

  /**
   * Extensions for title
   */
  _title?: IElement;

  /**
   * The date that the attachment was first created.
   */
  creation?: string;

  /**
   * Extensions for creation
   */
  _creation?: IElement;
}

export const RTTI_Attachment: t.Type<IAttachment> = t.recursion(
  'IAttachment',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      contentType: RTTI_code,
      _contentType: RTTI_Element,
      language: RTTI_code,
      _language: RTTI_Element,
      data: RTTI_base64Binary,
      _data: RTTI_Element,
      url: RTTI_url,
      _url: RTTI_Element,
      size: RTTI_unsignedInt,
      _size: RTTI_Element,
      hash: RTTI_base64Binary,
      _hash: RTTI_Element,
      title: t.string,
      _title: RTTI_Element,
      creation: RTTI_dateTime,
      _creation: RTTI_Element,
    }),
);
