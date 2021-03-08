import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period, IPeriod} from './RTTI_Period';
export enum Encounter_LocationStatusKind {
  _planned = 'planned',
  _active = 'active',
  _reserved = 'reserved',
  _completed = 'completed',
}
import {createEnumType} from '../../EnumType';

export interface IEncounter_Location {
  /**
   * The location where the encounter takes place.
   */
  location: IReference;

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
   * The status of the participants' presence at the specified location during the period specified. If the participant is no longer at the location, then the period will have an end date/time.
   */
  status?: Encounter_LocationStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * This will be used to specify the required levels (bed/ward/room/etc.) desired to be recorded to simplify either messaging or query.
   */
  physicalType?: ICodeableConcept;

  /**
   * Time period during which the patient was present at the location.
   */
  period?: IPeriod;
}

export const RTTI_Encounter_Location: t.Type<IEncounter_Location> = t.recursion(
  'IEncounter_Location',
  () =>
    t.intersection([
      t.type({
        location: RTTI_Reference,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        status: createEnumType<Encounter_LocationStatusKind>(
          Encounter_LocationStatusKind,
          'Encounter_LocationStatusKind',
        ),
        _status: RTTI_Element,
        physicalType: RTTI_CodeableConcept,
        period: RTTI_Period,
      }),
    ]),
);
