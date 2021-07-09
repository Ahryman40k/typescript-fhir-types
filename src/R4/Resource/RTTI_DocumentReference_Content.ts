import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Attachment, IAttachment} from './RTTI_Attachment';
import {RTTI_Coding, ICoding} from './RTTI_Coding';

export interface IDocumentReference_Content {
  /**
   * The document or URL of the document along with critical metadata to prove content has integrity.
   */
  attachment: IAttachment;

  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * An identifier of the document encoding, structure, and template that the document conforms to beyond the base format indicated in the mimeType.
   */
  format?: ICoding;
}

export const RTTI_DocumentReference_Content: t.Type<IDocumentReference_Content> =
  t.recursion('IDocumentReference_Content', () =>
    t.intersection([
      t.type({
        attachment: RTTI_Attachment,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        format: RTTI_Coding,
      }),
    ]),
  );
