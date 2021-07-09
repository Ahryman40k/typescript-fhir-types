import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_id} from '../Scalar/RTTI_id';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_uri} from '../Scalar/RTTI_uri';

export interface IStructureDefinition_Mapping {
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
   * An Internal id that is used to identify this mapping set when specific mappings are made.
   */
  identity?: string;

  /**
   * Extensions for identity
   */
  _identity?: IElement;

  /**
   * An absolute URI that identifies the specification that this mapping is expressed to.
   */
  uri?: string;

  /**
   * Extensions for uri
   */
  _uri?: IElement;

  /**
   * A name for the specification that is being mapped to.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
   */
  comment?: string;

  /**
   * Extensions for comment
   */
  _comment?: IElement;
}

export const RTTI_StructureDefinition_Mapping: t.Type<IStructureDefinition_Mapping> =
  t.recursion('IStructureDefinition_Mapping', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      identity: RTTI_id,
      _identity: RTTI_Element,
      uri: RTTI_uri,
      _uri: RTTI_Element,
      name: t.string,
      _name: RTTI_Element,
      comment: t.string,
      _comment: RTTI_Element,
    }),
  );
