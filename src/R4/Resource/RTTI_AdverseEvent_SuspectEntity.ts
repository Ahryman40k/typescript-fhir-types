import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {
  RTTI_AdverseEvent_Causality,
  IAdverseEvent_Causality,
} from './RTTI_AdverseEvent_Causality';

export interface IAdverseEvent_SuspectEntity {
  /**
   * Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.
   */
  instance: IReference;

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
   * Information on the possible cause of the event.
   */
  causality?: IAdverseEvent_Causality[];
}

export const RTTI_AdverseEvent_SuspectEntity: t.Type<IAdverseEvent_SuspectEntity> =
  t.recursion('IAdverseEvent_SuspectEntity', () =>
    t.intersection([
      t.type({
        instance: RTTI_Reference,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        causality: t.array(RTTI_AdverseEvent_Causality),
      }),
    ]),
  );
