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
import {RTTI_canonical} from '../Scalar/RTTI_canonical';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {
  RTTI_QuestionnaireResponse_Item,
  IQuestionnaireResponse_Item,
} from './RTTI_QuestionnaireResponse_Item';
export enum QuestionnaireResponseStatusKind {
  _inProgress = 'in-progress',
  _completed = 'completed',
  _amended = 'amended',
  _enteredInError = 'entered-in-error',
  _stopped = 'stopped',
}
import {createEnumType} from '../../EnumType';
import {IDomainResource} from './IDomainResource';

export interface IQuestionnaireResponse extends IDomainResource {
  /**
   * This is a QuestionnaireResponse resource
   */
  resourceType: 'QuestionnaireResponse';

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
   * A business identifier assigned to a particular completed (or partially completed) questionnaire.
   */
  identifier?: IIdentifier;

  /**
   * The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.
   */
  basedOn?: IReference[];

  /**
   * A procedure or observation that this questionnaire was performed as part of the execution of.  For example, the surgery a checklist was executed as part of.
   */
  partOf?: IReference[];

  /**
   * The Questionnaire that defines and organizes the questions for which answers are being provided.
   */
  questionnaire?: string;

  /**
   * The position of the questionnaire response within its overall lifecycle.
   */
  status?: QuestionnaireResponseStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information.
   */
  subject?: IReference;

  /**
   * The Encounter during which this questionnaire response was created or to which the creation of this record is tightly associated.
   */
  encounter?: IReference;

  /**
   * The date and/or time that this set of answers were last changed.
   */
  authored?: string;

  /**
   * Extensions for authored
   */
  _authored?: IElement;

  /**
   * Person who received the answers to the questions in the QuestionnaireResponse and recorded them in the system.
   */
  author?: IReference;

  /**
   * The person who answered the questions about the subject.
   */
  source?: IReference;

  /**
   * A group or question item from the original questionnaire for which answers are provided.
   */
  item?: IQuestionnaireResponse_Item[];
}

export const RTTI_QuestionnaireResponse: t.Type<IQuestionnaireResponse> =
  t.recursion('IQuestionnaireResponse', () =>
    t.intersection([
      t.type({
        resourceType: t.literal('QuestionnaireResponse'),
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
        identifier: RTTI_Identifier,
        basedOn: t.array(RTTI_Reference),
        partOf: t.array(RTTI_Reference),
        questionnaire: RTTI_canonical,
        status: createEnumType<QuestionnaireResponseStatusKind>(
          QuestionnaireResponseStatusKind,
          'QuestionnaireResponseStatusKind',
        ),
        _status: RTTI_Element,
        subject: RTTI_Reference,
        encounter: RTTI_Reference,
        authored: RTTI_dateTime,
        _authored: RTTI_Element,
        author: RTTI_Reference,
        source: RTTI_Reference,
        item: t.array(RTTI_QuestionnaireResponse_Item),
      }),
    ]),
  );
