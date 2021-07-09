import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period, IPeriod} from './RTTI_Period';

export interface IDocumentReference_Context {
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
   * Describes the clinical encounter or type of care that the document content is associated with.
   */
  encounter?: IReference[];

  /**
   * This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the type Code, such as a "History and Physical Report" in which the procedure being documented is necessarily a "History and Physical" act.
   */
  event?: ICodeableConcept[];

  /**
   * The time period over which the service that is described by the document was provided.
   */
  period?: IPeriod;

  /**
   * The kind of facility where the patient was seen.
   */
  facilityType?: ICodeableConcept;

  /**
   * This property may convey specifics about the practice setting where the content was created, often reflecting the clinical specialty.
   */
  practiceSetting?: ICodeableConcept;

  /**
   * The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
   */
  sourcePatientInfo?: IReference;

  /**
   * Related identifiers or resources associated with the DocumentReference.
   */
  related?: IReference[];
}

export const RTTI_DocumentReference_Context: t.Type<IDocumentReference_Context> =
  t.recursion('IDocumentReference_Context', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      encounter: t.array(RTTI_Reference),
      event: t.array(RTTI_CodeableConcept),
      period: RTTI_Period,
      facilityType: RTTI_CodeableConcept,
      practiceSetting: RTTI_CodeableConcept,
      sourcePatientInfo: RTTI_Reference,
      related: t.array(RTTI_Reference),
    }),
  );
