import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {
  RTTI_ElementDefinition_Discriminator,
  IElementDefinition_Discriminator,
} from './RTTI_ElementDefinition_Discriminator';
import {RTTI_Element, IElement} from './RTTI_Element';
export enum ElementDefinition_SlicingRulesKind {
  _closed = 'closed',
  _open = 'open',
  _openAtEnd = 'openAtEnd',
}
import {createEnumType} from '../../EnumType';

export interface IElementDefinition_Slicing {
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
   * Designates which child elements are used to discriminate between the slices when processing an instance. If one or more discriminators are provided, the value of the child elements in the instance data SHALL completely distinguish which slice the element in the resource matches based on the allowed values for those elements in each of the slices.
   */
  discriminator?: IElementDefinition_Discriminator[];

  /**
   * A human-readable text description of how the slicing works. If there is no discriminator, this is required to be present to provide whatever information is possible about how the slices can be differentiated.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * If the matching elements have to occur in the same order as defined in the profile.
   */
  ordered?: boolean;

  /**
   * Extensions for ordered
   */
  _ordered?: IElement;

  /**
   * Whether additional slices are allowed or not. When the slices are ordered, profile authors can also say that additional slices are only allowed at the end.
   */
  rules?: ElementDefinition_SlicingRulesKind;

  /**
   * Extensions for rules
   */
  _rules?: IElement;
}

export const RTTI_ElementDefinition_Slicing: t.Type<IElementDefinition_Slicing> =
  t.recursion('IElementDefinition_Slicing', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      discriminator: t.array(RTTI_ElementDefinition_Discriminator),
      description: t.string,
      _description: RTTI_Element,
      ordered: t.boolean,
      _ordered: RTTI_Element,
      rules: createEnumType<ElementDefinition_SlicingRulesKind>(
        ElementDefinition_SlicingRulesKind,
        'ElementDefinition_SlicingRulesKind',
      ),
      _rules: RTTI_Element,
    }),
  );
