import * as t from 'io-ts';
import {RTTI_id} from '../Scalar/RTTI_id';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_uri} from '../Scalar/RTTI_uri';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_code} from '../Scalar/RTTI_code';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import {RTTI_ResourceList, IResourceList} from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_instant} from '../Scalar/RTTI_instant';
import {
  RTTI_DiagnosticReport_Media,
  IDiagnosticReport_Media,
} from './RTTI_DiagnosticReport_Media';
import {RTTI_Attachment, IAttachment} from './RTTI_Attachment';
export enum DiagnosticReportStatusKind {
  _registered = 'registered',
  _partial = 'partial',
  _preliminary = 'preliminary',
  _final = 'final',
  _amended = 'amended',
  _corrected = 'corrected',
  _appended = 'appended',
  _cancelled = 'cancelled',
  _enteredInError = 'entered-in-error',
  _unknown = 'unknown',
  _rejected = 'rejected',
}
import {createEnumType} from '../../EnumType';

import {IDomainResource} from './IDomainResource';

export interface IDiagnosticReport extends IDomainResource {
  /**
   * This is a DiagnosticReport resource
   */
  resourceType: 'DiagnosticReport';

  /**
   * A code or name that describes this diagnostic report.
   */
  code: ICodeableConcept;

  /**
   * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
   */
  meta?: IMeta;

  /**
   * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * Extensions for implicitRules
   */
  _implicitRules?: IElement;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * Extensions for language
   */
  _language?: IElement;

  /**
   * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
   */
  text?: INarrative;

  /**
   * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
   */
  contained?: IResourceList[];

  /**
   * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * Identifiers assigned to this report by the performer or other systems.
   */
  identifier?: IIdentifier[];

  /**
   * Details concerning a service requested.
   */
  basedOn?: IReference[];

  /**
   * The status of the diagnostic report.
   */
  status?: DiagnosticReportStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * A code that classifies the clinical discipline, department or diagnostic service that created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for searching, sorting and display purposes.
   */
  category?: ICodeableConcept[];

  /**
   * The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources.
   */
  subject?: IReference;

  /**
   * The healthcare event  (e.g. a patient and healthcare provider interaction) which this DiagnosticReport is about.
   */
  encounter?: IReference;

  /**
   * The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.
   */
  effectiveDateTime?: string;

  /**
   * Extensions for effectiveDateTime
   */
  _effectiveDateTime?: IElement;

  /**
   * The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.
   */
  effectivePeriod?: IPeriod;

  /**
   * The date and time that this version of the report was made available to providers, typically after the report was reviewed and verified.
   */
  issued?: string;

  /**
   * Extensions for issued
   */
  _issued?: IElement;

  /**
   * The diagnostic service that is responsible for issuing the report.
   */
  performer?: IReference[];

  /**
   * The practitioner or organization that is responsible for the report's conclusions and interpretations.
   */
  resultsInterpreter?: IReference[];

  /**
   * Details about the specimens on which this diagnostic report is based.
   */
  specimen?: IReference[];

  /**
   * [Observations](observation.html)  that are part of this diagnostic report.
   */
  result?: IReference[];

  /**
   * One or more links to full details of any imaging performed during the diagnostic investigation. Typically, this is imaging performed by DICOM enabled modalities, but this is not required. A fully enabled PACS viewer can use this information to provide views of the source images.
   */
  imagingStudy?: IReference[];

  /**
   * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
   */
  media?: IDiagnosticReport_Media[];

  /**
   * Concise and clinically contextualized summary conclusion (interpretation/impression) of the diagnostic report.
   */
  conclusion?: string;

  /**
   * Extensions for conclusion
   */
  _conclusion?: IElement;

  /**
   * One or more codes that represent the summary conclusion (interpretation/impression) of the diagnostic report.
   */
  conclusionCode?: ICodeableConcept[];

  /**
   * Rich text representation of the entire result as issued by the diagnostic service. Multiple formats are allowed but they SHALL be semantically equivalent.
   */
  presentedForm?: IAttachment[];
}

export const RTTI_DiagnosticReport: t.Type<IDiagnosticReport> = t.recursion(
  'IDiagnosticReport',
  () =>
    t.intersection([
      t.type({
        resourceType: t.literal('DiagnosticReport'),
        code: RTTI_CodeableConcept,
      }),
      t.partial({
        id: RTTI_id,
        meta: RTTI_Meta,
        implicitRules: RTTI_uri,
        _implicitRules: RTTI_Element,
        language: RTTI_code,
        _language: RTTI_Element,
        text: RTTI_Narrative,
        contained: t.array(RTTI_ResourceList),
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        identifier: t.array(RTTI_Identifier),
        basedOn: t.array(RTTI_Reference),
        status: createEnumType<DiagnosticReportStatusKind>(
          DiagnosticReportStatusKind,
          'DiagnosticReportStatusKind',
        ),
        _status: RTTI_Element,
        category: t.array(RTTI_CodeableConcept),
        subject: RTTI_Reference,
        encounter: RTTI_Reference,
        effectiveDateTime: t.string,
        _effectiveDateTime: RTTI_Element,
        effectivePeriod: RTTI_Period,
        issued: RTTI_instant,
        _issued: RTTI_Element,
        performer: t.array(RTTI_Reference),
        resultsInterpreter: t.array(RTTI_Reference),
        specimen: t.array(RTTI_Reference),
        result: t.array(RTTI_Reference),
        imagingStudy: t.array(RTTI_Reference),
        media: t.array(RTTI_DiagnosticReport_Media),
        conclusion: t.string,
        _conclusion: RTTI_Element,
        conclusionCode: t.array(RTTI_CodeableConcept),
        presentedForm: t.array(RTTI_Attachment),
      }),
    ]),
);
