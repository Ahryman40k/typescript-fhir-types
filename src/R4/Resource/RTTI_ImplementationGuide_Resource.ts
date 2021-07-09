import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_id} from '../Scalar/RTTI_id';
export enum ImplementationGuide_ResourceFhirVersionKind {
  _001 = '0.01',
  _005 = '0.05',
  _006 = '0.06',
  _011 = '0.11',
  _0080 = '0.0.80',
  _0081 = '0.0.81',
  _0082 = '0.0.82',
  _040 = '0.4.0',
  _050 = '0.5.0',
  _100 = '1.0.0',
  _101 = '1.0.1',
  _102 = '1.0.2',
  _110 = '1.1.0',
  _140 = '1.4.0',
  _160 = '1.6.0',
  _180 = '1.8.0',
  _300 = '3.0.0',
  _301 = '3.0.1',
  _330 = '3.3.0',
  _350 = '3.5.0',
  _400 = '4.0.0',
}
import {createEnumType} from '../../EnumType';

export interface IImplementationGuide_Resource {
  /**
   * Where this resource is found.
   */
  reference: IReference;

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
   * Indicates the FHIR Version(s) this artifact is intended to apply to. If no versions are specified, the resource is assumed to apply to all the versions stated in ImplementationGuide.fhirVersion.
   */
  fhirVersion?: ImplementationGuide_ResourceFhirVersionKind[];

  /**
   * Extensions for fhirVersion
   */
  _fhirVersion?: IElement[];

  /**
   * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * A description of the reason that a resource has been included in the implementation guide.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * If true or a reference, indicates the resource is an example instance.  If a reference is present, indicates that the example is an example of the specified profile.
   */
  exampleBoolean?: boolean;

  /**
   * Extensions for exampleBoolean
   */
  _exampleBoolean?: IElement;

  /**
   * If true or a reference, indicates the resource is an example instance.  If a reference is present, indicates that the example is an example of the specified profile.
   */
  exampleCanonical?: string;

  /**
   * Extensions for exampleCanonical
   */
  _exampleCanonical?: IElement;

  /**
   * Reference to the id of the grouping this resource appears in.
   */
  groupingId?: string;

  /**
   * Extensions for groupingId
   */
  _groupingId?: IElement;
}

export const RTTI_ImplementationGuide_Resource: t.Type<IImplementationGuide_Resource> =
  t.recursion('IImplementationGuide_Resource', () =>
    t.intersection([
      t.type({
        reference: RTTI_Reference,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        fhirVersion: t.array(
          createEnumType<ImplementationGuide_ResourceFhirVersionKind>(
            ImplementationGuide_ResourceFhirVersionKind,
            'ImplementationGuide_ResourceFhirVersionKind',
          ),
        ),
        _fhirVersion: t.array(RTTI_Element),
        name: t.string,
        _name: RTTI_Element,
        description: t.string,
        _description: RTTI_Element,
        exampleBoolean: t.boolean,
        _exampleBoolean: RTTI_Element,
        exampleCanonical: t.string,
        _exampleCanonical: RTTI_Element,
        groupingId: RTTI_id,
        _groupingId: RTTI_Element,
      }),
    ]),
  );
