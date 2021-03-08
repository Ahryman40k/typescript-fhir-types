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
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {RTTI_Period, IPeriod} from './RTTI_Period';

import {
  RTTI_Contract_ContentDefinition,
  IContract_ContentDefinition,
} from './RTTI_Contract_ContentDefinition';
import {RTTI_Contract_Term, IContract_Term} from './RTTI_Contract_Term';
import {RTTI_Contract_Signer, IContract_Signer} from './RTTI_Contract_Signer';
import {
  RTTI_Contract_Friendly,
  IContract_Friendly,
} from './RTTI_Contract_Friendly';
import {RTTI_Contract_Legal, IContract_Legal} from './RTTI_Contract_Legal';
import {RTTI_Contract_Rule, IContract_Rule} from './RTTI_Contract_Rule';
import {RTTI_Attachment, IAttachment} from './RTTI_Attachment';
import {IDomainResource} from './IDomainResource';

export interface IContract extends IDomainResource {
  /**
   * This is a Contract resource
   */
  resourceType: 'Contract';

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
   * Unique identifier for this Contract or a derivative that references a Source Contract.
   */
  identifier?: IIdentifier[];

  /**
   * Canonical identifier for this contract, represented as a URI (globally unique).
   */
  url?: string;

  /**
   * Extensions for url
   */
  _url?: IElement;

  /**
   * An edition identifier used for business purposes to label business significant variants.
   */
  version?: string;

  /**
   * Extensions for version
   */
  _version?: IElement;

  /**
   * The status of the resource instance.
   */
  status?: string;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * Legal states of the formation of a legal instrument, which is a formally executed written document that can be formally attributed to its author, records and formally expresses a legally enforceable act, process, or contractual duty, obligation, or right, and therefore evidences that act, process, or agreement.
   */
  legalState?: ICodeableConcept;

  /**
   * The URL pointing to a FHIR-defined Contract Definition that is adhered to in whole or part by this Contract.
   */
  instantiatesCanonical?: IReference;

  /**
   * The URL pointing to an externally maintained definition that is adhered to in whole or in part by this Contract.
   */
  instantiatesUri?: string;

  /**
   * Extensions for instantiatesUri
   */
  _instantiatesUri?: IElement;

  /**
   * The minimal content derived from the basal information source at a specific stage in its lifecycle.
   */
  contentDerivative?: ICodeableConcept;

  /**
   * When this  Contract was issued.
   */
  issued?: string;

  /**
   * Extensions for issued
   */
  _issued?: IElement;

  /**
   * Relevant time or time-period when this Contract is applicable.
   */
  applies?: IPeriod;

  /**
   * Event resulting in discontinuation or termination of this Contract instance by one or more parties to the contract.
   */
  expirationType?: ICodeableConcept;

  /**
   * The target entity impacted by or of interest to parties to the agreement.
   */
  subject?: IReference[];

  /**
   * A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.
   */
  authority?: IReference[];

  /**
   * Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.
   */
  domain?: IReference[];

  /**
   * Sites in which the contract is complied with,  exercised, or in force.
   */
  site?: IReference[];

  /**
   * A natural language name identifying this Contract definition, derivative, or instance in any legal state. Provides additional information about its content. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * A short, descriptive, user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
   */
  title?: string;

  /**
   * Extensions for title
   */
  _title?: IElement;

  /**
   * An explanatory or alternate user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
   */
  subtitle?: string;

  /**
   * Extensions for subtitle
   */
  _subtitle?: IElement;

  /**
   * Alternative representation of the title for this Contract definition, derivative, or instance in any legal state., e.g., a domain specific contract number related to legislation.
   */
  alias?: string[];

  /**
   * Extensions for alias
   */
  _alias?: IElement[];

  /**
   * The individual or organization that authored the Contract definition, derivative, or instance in any legal state.
   */
  author?: IReference;

  /**
   * A selector of legal concerns for this Contract definition, derivative, or instance in any legal state.
   */
  scope?: ICodeableConcept;

  /**
   * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
   */
  topicCodeableConcept?: ICodeableConcept;

  /**
   * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
   */
  topicReference?: IReference;

  /**
   * A high-level category for the legal instrument, whether constructed as a Contract definition, derivative, or instance in any legal state.  Provides additional information about its content within the context of the Contract's scope to distinguish the kinds of systems that would be interested in the contract.
   */
  type?: ICodeableConcept;

  /**
   * Sub-category for the Contract that distinguishes the kinds of systems that would be interested in the Contract within the context of the Contract's scope.
   */
  subType?: ICodeableConcept[];

  /**
   * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
   */
  contentDefinition?: IContract_ContentDefinition;

  /**
   * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
   */
  term?: IContract_Term[];

  /**
   * Information that may be needed by/relevant to the performer in their execution of this term action.
   */
  supportingInfo?: IReference[];

  /**
   * Links to Provenance records for past versions of this Contract definition, derivative, or instance, which identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the Contract.  The Provence.entity indicates the target that was changed in the update. http://build.fhir.org/provenance-definitions.html#Provenance.entity.
   */
  relevantHistory?: IReference[];

  /**
   * Parties with legal standing in the Contract, including the principal parties, the grantor(s) and grantee(s), which are any person or organization bound by the contract, and any ancillary parties, which facilitate the execution of the contract such as a notary or witness.
   */
  signer?: IContract_Signer[];

  /**
   * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
   */
  friendly?: IContract_Friendly[];

  /**
   * List of Legal expressions or representations of this Contract.
   */
  legal?: IContract_Legal[];

  /**
   * List of Computable Policy Rule Language Representations of this Contract.
   */
  rule?: IContract_Rule[];

  /**
   * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
   */
  legallyBindingAttachment?: IAttachment;

  /**
   * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
   */
  legallyBindingReference?: IReference;
}

export const RTTI_Contract: t.Type<IContract> = t.recursion('IContract', () =>
  t.intersection([
    t.type({
      resourceType: t.literal('Contract'),
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
      url: RTTI_uri,
      _url: RTTI_Element,
      version: t.string,
      _version: RTTI_Element,
      status: RTTI_code,
      _status: RTTI_Element,
      legalState: RTTI_CodeableConcept,
      instantiatesCanonical: RTTI_Reference,
      instantiatesUri: RTTI_uri,
      _instantiatesUri: RTTI_Element,
      contentDerivative: RTTI_CodeableConcept,
      issued: RTTI_dateTime,
      _issued: RTTI_Element,
      applies: RTTI_Period,
      expirationType: RTTI_CodeableConcept,
      subject: t.array(RTTI_Reference),
      authority: t.array(RTTI_Reference),
      domain: t.array(RTTI_Reference),
      site: t.array(RTTI_Reference),
      name: t.string,
      _name: RTTI_Element,
      title: t.string,
      _title: RTTI_Element,
      subtitle: t.string,
      _subtitle: RTTI_Element,
      alias: t.array(t.string),
      _alias: t.array(RTTI_Element),
      author: RTTI_Reference,
      scope: RTTI_CodeableConcept,
      topicCodeableConcept: RTTI_CodeableConcept,
      topicReference: RTTI_Reference,
      type: RTTI_CodeableConcept,
      subType: t.array(RTTI_CodeableConcept),
      contentDefinition: RTTI_Contract_ContentDefinition,
      term: t.array(RTTI_Contract_Term),
      supportingInfo: t.array(RTTI_Reference),
      relevantHistory: t.array(RTTI_Reference),
      signer: t.array(RTTI_Contract_Signer),
      friendly: t.array(RTTI_Contract_Friendly),
      legal: t.array(RTTI_Contract_Legal),
      rule: t.array(RTTI_Contract_Rule),
      legallyBindingAttachment: RTTI_Attachment,
      legallyBindingReference: RTTI_Reference,
    }),
  ]),
);
