import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_uri} from '../Scalar/RTTI_uri';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_canonical} from '../Scalar/RTTI_canonical';

export interface IConceptMap_DependsOn {
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
   * A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somewhere that is labeled to correspond with a code system property.
   */
  property?: string;

  /**
   * Extensions for property
   */
  _property?: IElement;

  /**
   * An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).
   */
  system?: string;

  /**
   * Identity (code or path) or the element/item/ValueSet/text that the map depends on / refers to.
   */
  value?: string;

  /**
   * Extensions for value
   */
  _value?: IElement;

  /**
   * The display for the code. The display is only provided to help editors when editing the concept map.
   */
  display?: string;

  /**
   * Extensions for display
   */
  _display?: IElement;
}

export const RTTI_ConceptMap_DependsOn: t.Type<IConceptMap_DependsOn> =
  t.recursion('IConceptMap_DependsOn', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      property: RTTI_uri,
      _property: RTTI_Element,
      system: RTTI_canonical,
      value: t.string,
      _value: RTTI_Element,
      display: t.string,
      _display: RTTI_Element,
    }),
  );
