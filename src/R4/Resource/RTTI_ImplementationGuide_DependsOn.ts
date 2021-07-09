import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_canonical} from '../Scalar/RTTI_canonical';
import {RTTI_id} from '../Scalar/RTTI_id';
import {RTTI_Element, IElement} from './RTTI_Element';

export interface IImplementationGuide_DependsOn {
  /**
   * A canonical reference to the Implementation guide for the dependency.
   */
  uri: string;

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
   * The NPM package name for the Implementation Guide that this IG depends on.
   */
  packageId?: string;

  /**
   * Extensions for packageId
   */
  _packageId?: IElement;

  /**
   * The version of the IG that is depended on, when the correct version is required to understand the IG correctly.
   */
  version?: string;

  /**
   * Extensions for version
   */
  _version?: IElement;
}

export const RTTI_ImplementationGuide_DependsOn: t.Type<IImplementationGuide_DependsOn> =
  t.recursion('IImplementationGuide_DependsOn', () =>
    t.intersection([
      t.type({
        uri: RTTI_canonical,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        packageId: RTTI_id,
        _packageId: RTTI_Element,
        version: t.string,
        _version: RTTI_Element,
      }),
    ]),
  );
