
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_ContactDetail, IContactDetail} from './RTTI_ContactDetail';
import {RTTI_RelatedArtifact, IRelatedArtifact} from './RTTI_RelatedArtifact';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';
import {RTTI_ResearchStudy_Arm, IResearchStudy_Arm} from './RTTI_ResearchStudy_Arm';
import {RTTI_ResearchStudy_Objective, IResearchStudy_Objective} from './RTTI_ResearchStudy_Objective';

export enum ResearchStudyStatusKind {
                active = 'active',
administrativelyCompleted = 'administrativelyCompleted',
approved = 'approved',
closedToAccrual = 'closedToAccrual',
closedToAccrualAndIntervention = 'closedToAccrualAndIntervention',
completed = 'completed',
disapproved = 'disapproved',
inReview = 'inReview',
temporarilyClosedToAccrual = 'temporarilyClosedToAccrual',
temporarilyClosedToAccrualAndIntervention = 'temporarilyClosedToAccrualAndIntervention',
withdrawn = 'withdrawn'
            }
const ResearchStudyStatusKindKeys = t.keyof({
                [ResearchStudyStatusKind.active]: null,
[ResearchStudyStatusKind.administrativelyCompleted]: null,
[ResearchStudyStatusKind.approved]: null,
[ResearchStudyStatusKind.closedToAccrual]: null,
[ResearchStudyStatusKind.closedToAccrualAndIntervention]: null,
[ResearchStudyStatusKind.completed]: null,
[ResearchStudyStatusKind.disapproved]: null,
[ResearchStudyStatusKind.inReview]: null,
[ResearchStudyStatusKind.temporarilyClosedToAccrual]: null,
[ResearchStudyStatusKind.temporarilyClosedToAccrualAndIntervention]: null,
[ResearchStudyStatusKind.withdrawn]: null
            });


            export interface IResearchStudy {
                
                    /**
                     * This is a ResearchStudy resource
                     */
                    resourceType: 'ResearchStudy';
                    
                
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
                     * Identifiers assigned to this research study by the sponsor or other systems.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * A short, descriptive user-friendly label for the study.
                     */
                    title? : string;
                    

                    /**
                     * Extensions for title
                     */
                    _title? : IElement;
                    

                    /**
                     * The set of steps expected to be performed as part of the execution of the study.
                     */
                    protocol? : IReference[];
                    

                    /**
                     * A larger research study of which this particular study is a component or step.
                     */
                    partOf? : IReference[];
                    

                    /**
                     * The current state of the study.
                     */
                    status? : ResearchStudyStatusKind;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * The type of study based upon the intent of the study's activities. A classification of the intent of the study.
                     */
                    primaryPurposeType? : ICodeableConcept;
                    

                    /**
                     * The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
                     */
                    phase? : ICodeableConcept;
                    

                    /**
                     * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
                     */
                    category? : ICodeableConcept[];
                    

                    /**
                     * The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
                     */
                    focus? : ICodeableConcept[];
                    

                    /**
                     * The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as an inclusion criterion "healthy volunteer", but the target condition code would be a Lupus SNOMED code.
                     */
                    condition? : ICodeableConcept[];
                    

                    /**
                     * Contact details to assist a user in learning more about or engaging with the study.
                     */
                    contact? : IContactDetail[];
                    

                    /**
                     * Citations, references and other related documents.
                     */
                    relatedArtifact? : IRelatedArtifact[];
                    

                    /**
                     * Key terms to aid in searching for or filtering the study.
                     */
                    keyword? : ICodeableConcept[];
                    

                    /**
                     * Indicates a country, state or other region where the study is taking place.
                     */
                    location? : ICodeableConcept[];
                    

                    /**
                     * A full description of how the study is being conducted.
                     */
                    description? : string;
                    

                    /**
                     * Extensions for description
                     */
                    _description? : IElement;
                    

                    /**
                     * Reference to a Group that defines the criteria for and quantity of subjects participating in the study.  E.g. " 200 female Europeans between the ages of 20 and 45 with early onset diabetes".
                     */
                    enrollment? : IReference[];
                    

                    /**
                     * Identifies the start date and the expected (or actual, depending on status) end date for the study.
                     */
                    period? : IPeriod;
                    

                    /**
                     * An organization that initiates the investigation and is legally responsible for the study.
                     */
                    sponsor? : IReference;
                    

                    /**
                     * A researcher in a study who oversees multiple aspects of the study, such as concept development, protocol writing, protocol submission for IRB approval, participant recruitment, informed consent, data collection, analysis, interpretation and presentation.
                     */
                    principalInvestigator? : IReference;
                    

                    /**
                     * A facility in which study activities are conducted.
                     */
                    site? : IReference[];
                    

                    /**
                     * A description and/or code explaining the premature termination of the study.
                     */
                    reasonStopped? : ICodeableConcept;
                    

                    /**
                     * Comments made about the study by the performer, subject or other participants.
                     */
                    note? : IAnnotation[];
                    

                    /**
                     * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
                     */
                    arm? : IResearchStudy_Arm[];
                    

                    /**
                     * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
                     */
                    objective? : IResearchStudy_Objective[];
                    
            }
        


        export const RTTI_ResearchStudy: t.Type<IResearchStudy> = t.recursion( 'IResearchStudy', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('ResearchStudy')
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
identifier: t.array(RTTI_Identifier),
title: t.string,
_title: RTTI_Element,
protocol: t.array(RTTI_Reference),
partOf: t.array(RTTI_Reference),
status: ResearchStudyStatusKindKeys,
_status: RTTI_Element,
primaryPurposeType: RTTI_CodeableConcept,
phase: RTTI_CodeableConcept,
category: t.array(RTTI_CodeableConcept),
focus: t.array(RTTI_CodeableConcept),
condition: t.array(RTTI_CodeableConcept),
contact: t.array(RTTI_ContactDetail),
relatedArtifact: t.array(RTTI_RelatedArtifact),
keyword: t.array(RTTI_CodeableConcept),
location: t.array(RTTI_CodeableConcept),
description: t.string,
_description: RTTI_Element,
enrollment: t.array(RTTI_Reference),
period: RTTI_Period,
sponsor: RTTI_Reference,
principalInvestigator: RTTI_Reference,
site: t.array(RTTI_Reference),
reasonStopped: RTTI_CodeableConcept,
note: t.array(RTTI_Annotation),
arm: t.array(RTTI_ResearchStudy_Arm),
objective: t.array(RTTI_ResearchStudy_Objective)
        })
        
            ])
        );
        

        