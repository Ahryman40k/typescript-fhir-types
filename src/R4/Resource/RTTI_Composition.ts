
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Composition_Attester, IComposition_Attester} from './RTTI_Composition_Attester';
import {RTTI_Composition_RelatesTo, IComposition_RelatesTo} from './RTTI_Composition_RelatesTo';
import {RTTI_Composition_Event, IComposition_Event} from './RTTI_Composition_Event';
import {RTTI_Composition_Section, IComposition_Section} from './RTTI_Composition_Section';
import { createEnumType } from '../../EnumType'

export enum CompositionStatusKind {
                preliminary = 'preliminary',
final = 'final',
amended = 'amended',
enteredInError = 'entered-in-error'
            }
const CompositionStatusKindKeys = t.keyof({
                [CompositionStatusKind.preliminary]: null,
[CompositionStatusKind.final]: null,
[CompositionStatusKind.amended]: null,
[CompositionStatusKind.enteredInError]: null
            });


            export interface IComposition {
                
                    /**
                     * This is a Composition resource
                     */
                    resourceType: 'Composition'
                    

                    /**
                     * Specifies the particular kind of composition (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the composition.
                     */
                    type : ICodeableConcept;
                    

                    /**
                     * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
                     */
                    author : IReference[];
                    
                
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
                    contained? : IResourceList[];
                    

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
                     * A version-independent identifier for the Composition. This identifier stays constant as the composition is changed over time.
                     */
                    identifier? : IIdentifier;
                    

                    /**
                     * The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document.
                     */
                    status? : CompositionStatusKind;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * A categorization for the type of the composition - helps for indexing and searching. This may be implied by or derived from the code specified in the Composition Type.
                     */
                    category? : ICodeableConcept[];
                    

                    /**
                     * Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure).
                     */
                    subject? : IReference;
                    

                    /**
                     * Describes the clinical encounter or type of care this documentation is associated with.
                     */
                    encounter? : IReference;
                    

                    /**
                     * The composition editing time, when the composition was last logically changed by the author.
                     */
                    date? : string;
                    

                    /**
                     * Extensions for date
                     */
                    _date? : IElement;
                    

                    /**
                     * Official human-readable label for the composition.
                     */
                    title? : string;
                    

                    /**
                     * Extensions for title
                     */
                    _title? : IElement;
                    

                    /**
                     * The code specifying the level of confidentiality of the Composition.
                     */
                    confidentiality? : string;
                    

                    /**
                     * Extensions for confidentiality
                     */
                    _confidentiality? : IElement;
                    

                    /**
                     * A participant who has attested to the accuracy of the composition/document.
                     */
                    attester? : IComposition_Attester[];
                    

                    /**
                     * Identifies the organization or group who is responsible for ongoing maintenance of and access to the composition/document information.
                     */
                    custodian? : IReference;
                    

                    /**
                     * Relationships that this composition has with other compositions or documents that already exist.
                     */
                    relatesTo? : IComposition_RelatesTo[];
                    

                    /**
                     * The clinical service, such as a colonoscopy or an appendectomy, being documented.
                     */
                    event? : IComposition_Event[];
                    

                    /**
                     * The root of the sections that make up the composition.
                     */
                    section? : IComposition_Section[];
                    
            }
        


        export const RTTI_Composition: t.Type<IComposition> = t.recursion( 'IComposition', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('Composition'),
type: RTTI_CodeableConcept,
author: t.array(RTTI_Reference)
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
contained: t.array(RTTI_ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: RTTI_Identifier,
status: createEnumType<CompositionStatusKind>(CompositionStatusKind, 'CompositionStatusKind'),
_status: RTTI_Element,
category: t.array(RTTI_CodeableConcept),
subject: RTTI_Reference,
encounter: RTTI_Reference,
date: t.string,
_date: RTTI_Element,
title: t.string,
_title: RTTI_Element,
confidentiality: t.string,
_confidentiality: RTTI_Element,
attester: t.array(RTTI_Composition_Attester),
custodian: RTTI_Reference,
relatesTo: t.array(RTTI_Composition_RelatesTo),
event: t.array(RTTI_Composition_Event),
section: t.array(RTTI_Composition_Section)
        })
        
            ])
        );
        

        
