
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_ContactDetail, IContactDetail} from './RTTI_ContactDetail';
import {RTTI_UsageContext, IUsageContext} from './RTTI_UsageContext';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_RelatedArtifact, IRelatedArtifact} from './RTTI_RelatedArtifact';


import {RTTI_Measure_Group, IMeasure_Group} from './RTTI_Measure_Group';
import {RTTI_Measure_SupplementalData, IMeasure_SupplementalData} from './RTTI_Measure_SupplementalData';

export enum MeasureStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
export enum MeasureImprovementNotationKind {
                increase = 'increase',
decrease = 'decrease'
            }
const MeasureStatusKindKeys = t.keyof({
                [MeasureStatusKind.draft]: null,
[MeasureStatusKind.active]: null,
[MeasureStatusKind.retired]: null,
[MeasureStatusKind.unknown]: null
            });
const MeasureImprovementNotationKindKeys = t.keyof({
                [MeasureImprovementNotationKind.increase]: null,
[MeasureImprovementNotationKind.decrease]: null
            });


            export interface IMeasure {
                
                    /**
                     * This is a Measure resource
                     */
                    resourceType: 'Measure';
                    
                
                    /**
                     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                     */
                    id? : string;
                    

                    /**
                     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                     */
                    meta? : IMeta;
                    

                    /**
                     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                     */
                    implicitRules? : string;
                    

                    /**
                     * Extensions for implicitRules
                     */
                    _implicitRules? : IElement;
                    

                    /**
                     * The base language in which the resource is written.
                     */
                    language? : string;
                    

                    /**
                     * Extensions for language
                     */
                    _language? : IElement;
                    

                    /**
                     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                     */
                    text? : INarrative;
                    

                    /**
                     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                     */
                    // contained? : IResourceList[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * An absolute URI that is used to identify this measure when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this measure is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the measure is stored on different servers.
                     */
                    url? : string;
                    

                    /**
                     * Extensions for url
                     */
                    _url? : IElement;
                    

                    /**
                     * A formal identifier that is used to identify this measure when it is represented in other formats, or referenced in a specification, model, design or an instance.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * The identifier that is used to identify this version of the measure when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the measure author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts.
                     */
                    version? : string;
                    

                    /**
                     * Extensions for version
                     */
                    _version? : IElement;
                    

                    /**
                     * A natural language name identifying the measure. This name should be usable as an identifier for the module by machine processing applications such as code generation.
                     */
                    name? : string;
                    

                    /**
                     * Extensions for name
                     */
                    _name? : IElement;
                    

                    /**
                     * A short, descriptive, user-friendly title for the measure.
                     */
                    title? : string;
                    

                    /**
                     * Extensions for title
                     */
                    _title? : IElement;
                    

                    /**
                     * An explanatory or alternate title for the measure giving additional information about its content.
                     */
                    subtitle? : string;
                    

                    /**
                     * Extensions for subtitle
                     */
                    _subtitle? : IElement;
                    

                    /**
                     * The status of this measure. Enables tracking the life-cycle of the content.
                     */
                    status? : MeasureStatusKind;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * A Boolean value to indicate that this measure is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
                     */
                    experimental? : boolean;
                    

                    /**
                     * Extensions for experimental
                     */
                    _experimental? : IElement;
                    

                    /**
                     * The intended subjects for the measure. If this element is not provided, a Patient subject is assumed, but the subject of the measure can be anything.
                     */
                    subjectCodeableConcept? : ICodeableConcept;
                    

                    /**
                     * The intended subjects for the measure. If this element is not provided, a Patient subject is assumed, but the subject of the measure can be anything.
                     */
                    subjectReference? : IReference;
                    

                    /**
                     * The date  (and optionally time) when the measure was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the measure changes.
                     */
                    date? : string;
                    

                    /**
                     * Extensions for date
                     */
                    _date? : IElement;
                    

                    /**
                     * The name of the organization or individual that published the measure.
                     */
                    publisher? : string;
                    

                    /**
                     * Extensions for publisher
                     */
                    _publisher? : IElement;
                    

                    /**
                     * Contact details to assist a user in finding and communicating with the publisher.
                     */
                    contact? : IContactDetail[];
                    

                    /**
                     * A free text natural language description of the measure from a consumer's perspective.
                     */
                    description? : string;
                    

                    /**
                     * Extensions for description
                     */
                    _description? : IElement;
                    

                    /**
                     * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate measure instances.
                     */
                    useContext? : IUsageContext[];
                    

                    /**
                     * A legal or geographic region in which the measure is intended to be used.
                     */
                    jurisdiction? : ICodeableConcept[];
                    

                    /**
                     * Explanation of why this measure is needed and why it has been designed as it has.
                     */
                    purpose? : string;
                    

                    /**
                     * Extensions for purpose
                     */
                    _purpose? : IElement;
                    

                    /**
                     * A detailed description, from a clinical perspective, of how the measure is used.
                     */
                    usage? : string;
                    

                    /**
                     * Extensions for usage
                     */
                    _usage? : IElement;
                    

                    /**
                     * A copyright statement relating to the measure and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the measure.
                     */
                    copyright? : string;
                    

                    /**
                     * Extensions for copyright
                     */
                    _copyright? : IElement;
                    

                    /**
                     * The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
                     */
                    approvalDate? : string;
                    

                    /**
                     * Extensions for approvalDate
                     */
                    _approvalDate? : IElement;
                    

                    /**
                     * The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.
                     */
                    lastReviewDate? : string;
                    

                    /**
                     * Extensions for lastReviewDate
                     */
                    _lastReviewDate? : IElement;
                    

                    /**
                     * The period during which the measure content was or is planned to be in active use.
                     */
                    effectivePeriod? : IPeriod;
                    

                    /**
                     * Descriptive topics related to the content of the measure. Topics provide a high-level categorization grouping types of measures that can be useful for filtering and searching.
                     */
                    topic? : ICodeableConcept[];
                    

                    /**
                     * An individiual or organization primarily involved in the creation and maintenance of the content.
                     */
                    author? : IContactDetail[];
                    

                    /**
                     * An individual or organization primarily responsible for internal coherence of the content.
                     */
                    editor? : IContactDetail[];
                    

                    /**
                     * An individual or organization primarily responsible for review of some aspect of the content.
                     */
                    reviewer? : IContactDetail[];
                    

                    /**
                     * An individual or organization responsible for officially endorsing the content for use in some setting.
                     */
                    endorser? : IContactDetail[];
                    

                    /**
                     * Related artifacts such as additional documentation, justification, or bibliographic references.
                     */
                    relatedArtifact? : IRelatedArtifact[];
                    

                    /**
                     * A reference to a Library resource containing the formal logic used by the measure.
                     */
                    library? : string[];
                    

                    /**
                     * Notices and disclaimers regarding the use of the measure or related to intellectual property (such as code systems) referenced by the measure.
                     */
                    disclaimer? : string;
                    

                    /**
                     * Extensions for disclaimer
                     */
                    _disclaimer? : IElement;
                    

                    /**
                     * Indicates how the calculation is performed for the measure, including proportion, ratio, continuous-variable, and cohort. The value set is extensible, allowing additional measure scoring types to be represented.
                     */
                    scoring? : ICodeableConcept;
                    

                    /**
                     * If this is a composite measure, the scoring method used to combine the component measures to determine the composite score.
                     */
                    compositeScoring? : ICodeableConcept;
                    

                    /**
                     * Indicates whether the measure is used to examine a process, an outcome over time, a patient-reported outcome, or a structure measure such as utilization.
                     */
                    type? : ICodeableConcept[];
                    

                    /**
                     * A description of the risk adjustment factors that may impact the resulting score for the measure and how they may be accounted for when computing and reporting measure results.
                     */
                    riskAdjustment? : string;
                    

                    /**
                     * Extensions for riskAdjustment
                     */
                    _riskAdjustment? : IElement;
                    

                    /**
                     * Describes how to combine the information calculated, based on logic in each of several populations, into one summarized result.
                     */
                    rateAggregation? : string;
                    

                    /**
                     * Extensions for rateAggregation
                     */
                    _rateAggregation? : IElement;
                    

                    /**
                     * Provides a succinct statement of the need for the measure. Usually includes statements pertaining to importance criterion: impact, gap in care, and evidence.
                     */
                    rationale? : string;
                    

                    /**
                     * Extensions for rationale
                     */
                    _rationale? : IElement;
                    

                    /**
                     * Provides a summary of relevant clinical guidelines or other clinical recommendations supporting the measure.
                     */
                    clinicalRecommendationStatement? : string;
                    

                    /**
                     * Extensions for clinicalRecommendationStatement
                     */
                    _clinicalRecommendationStatement? : IElement;
                    

                    /**
                     * Information on whether an increase or decrease in score is the preferred result (e.g., a higher score indicates better quality OR a lower score indicates better quality OR quality is within a range).
                     */
                    improvementNotation? : MeasureImprovementNotationKind;
                    

                    /**
                     * Extensions for improvementNotation
                     */
                    _improvementNotation? : IElement;
                    

                    /**
                     * Provides a description of an individual term used within the measure.
                     */
                    definition? : string[];
                    

                    /**
                     * Extensions for definition
                     */
                    _definition? : IElement[];
                    

                    /**
                     * Additional guidance for the measure including how it can be used in a clinical context, and the intent of the measure.
                     */
                    guidance? : string;
                    

                    /**
                     * Extensions for guidance
                     */
                    _guidance? : IElement;
                    

                    /**
                     * A group of population criteria for the measure.
                     */
                    group? : IMeasure_Group[];
                    

                    /**
                     * The supplemental data criteria for the measure report, specified as either the name of a valid CQL expression within a referenced library, or a valid FHIR Resource Path.
                     */
                    supplementalData? : IMeasure_SupplementalData[];
                    
            }
        


        export const RTTI_Measure: t.Type<IMeasure> = t.recursion( 'IMeasure', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('Measure')
        })
        ,
                
        t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
// contained: t.array(RTTI_ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
url: t.string,
_url: RTTI_Element,
identifier: t.array(RTTI_Identifier),
version: t.string,
_version: RTTI_Element,
name: t.string,
_name: RTTI_Element,
title: t.string,
_title: RTTI_Element,
subtitle: t.string,
_subtitle: RTTI_Element,
status: MeasureStatusKindKeys,
_status: RTTI_Element,
experimental: t.boolean,
_experimental: RTTI_Element,
subjectCodeableConcept: RTTI_CodeableConcept,
subjectReference: RTTI_Reference,
date: t.string,
_date: RTTI_Element,
publisher: t.string,
_publisher: RTTI_Element,
contact: t.array(RTTI_ContactDetail),
description: t.string,
_description: RTTI_Element,
useContext: t.array(RTTI_UsageContext),
jurisdiction: t.array(RTTI_CodeableConcept),
purpose: t.string,
_purpose: RTTI_Element,
usage: t.string,
_usage: RTTI_Element,
copyright: t.string,
_copyright: RTTI_Element,
approvalDate: t.string,
_approvalDate: RTTI_Element,
lastReviewDate: t.string,
_lastReviewDate: RTTI_Element,
effectivePeriod: RTTI_Period,
topic: t.array(RTTI_CodeableConcept),
author: t.array(RTTI_ContactDetail),
editor: t.array(RTTI_ContactDetail),
reviewer: t.array(RTTI_ContactDetail),
endorser: t.array(RTTI_ContactDetail),
relatedArtifact: t.array(RTTI_RelatedArtifact),
library: t.array(t.string),
disclaimer: t.string,
_disclaimer: RTTI_Element,
scoring: RTTI_CodeableConcept,
compositeScoring: RTTI_CodeableConcept,
type: t.array(RTTI_CodeableConcept),
riskAdjustment: t.string,
_riskAdjustment: RTTI_Element,
rateAggregation: t.string,
_rateAggregation: RTTI_Element,
rationale: t.string,
_rationale: RTTI_Element,
clinicalRecommendationStatement: t.string,
_clinicalRecommendationStatement: RTTI_Element,
improvementNotation: MeasureImprovementNotationKindKeys,
_improvementNotation: RTTI_Element,
definition: t.array(t.string),
_definition: t.array(RTTI_Element),
guidance: t.string,
_guidance: RTTI_Element,
group: t.array(RTTI_Measure_Group),
supplementalData: t.array(RTTI_Measure_SupplementalData)
        })
        
            ])
        );
        

        