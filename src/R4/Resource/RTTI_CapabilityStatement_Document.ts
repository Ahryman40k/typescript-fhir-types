import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_markdown} from '../Scalar/RTTI_markdown';
import {RTTI_canonical} from '../Scalar/RTTI_canonical';
export enum CapabilityStatement_DocumentModeKind {
  _producer = 'producer',
  _consumer = 'consumer',
}
import {createEnumType} from '../../EnumType';

export interface ICapabilityStatement_Document {
  /**
   * A profile on the document Bundle that constrains which resources are present, and their contents.
   */
  profile: string;

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
   * Mode of this document declaration - whether an application is a producer or consumer.
   */
  mode?: CapabilityStatement_DocumentModeKind;

  /**
   * Extensions for mode
   */
  _mode?: IElement;

  /**
   * A description of how the application supports or uses the specified document profile.  For example, when documents are created, what action is taken with consumed documents, etc.
   */
  documentation?: string;

  /**
   * Extensions for documentation
   */
  _documentation?: IElement;
}

export const RTTI_CapabilityStatement_Document: t.Type<ICapabilityStatement_Document> =
  t.recursion('ICapabilityStatement_Document', () =>
    t.intersection([
      t.type({
        profile: RTTI_canonical,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        mode: createEnumType<CapabilityStatement_DocumentModeKind>(
          CapabilityStatement_DocumentModeKind,
          'CapabilityStatement_DocumentModeKind',
        ),
        _mode: RTTI_Element,
        documentation: RTTI_markdown,
        _documentation: RTTI_Element,
      }),
    ]),
  );
