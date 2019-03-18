
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Coding, ICoding} from './RTTI_Coding';
import {RTTI_Contract_Context, IContract_Context} from './RTTI_Contract_Context';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Period, IPeriod} from './RTTI_Period';

import {RTTI_Contract_Answer, IContract_Answer} from './RTTI_Contract_Answer';

import {RTTI_Contract_ValuedItem, IContract_ValuedItem} from './RTTI_Contract_ValuedItem';




            export interface IContract_Asset {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * Differentiates the kind of the asset .
                     */
                    scope? : ICodeableConcept;
                    

                    /**
                     * Target entity type about which the term may be concerned.
                     */
                    type? : ICodeableConcept[];
                    

                    /**
                     * Associated entities.
                     */
                    typeReference? : IReference[];
                    

                    /**
                     * May be a subtype or part of an offered asset.
                     */
                    subtype? : ICodeableConcept[];
                    

                    /**
                     * Specifies the applicability of the term to an asset resource instance, and instances it refers to orinstances that refer to it, and/or are owned by the offeree.
                     */
                    relationship? : ICoding;
                    

                    /**
                     * Circumstance of the asset.
                     */
                    context? : IContract_Context[];
                    

                    /**
                     * Description of the quality and completeness of the asset that imay be a factor in its valuation.
                     */
                    condition? : string;
                    

                    /**
                     * Extensions for condition
                     */
                    _condition? : IElement;
                    

                    /**
                     * Type of Asset availability for use or ownership.
                     */
                    periodType? : ICodeableConcept[];
                    

                    /**
                     * Asset relevant contractual time period.
                     */
                    period? : IPeriod[];
                    

                    /**
                     * Time period of asset use.
                     */
                    usePeriod? : IPeriod[];
                    

                    /**
                     * Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract.
                     */
                    text? : string;
                    

                    /**
                     * Extensions for text
                     */
                    _text? : IElement;
                    

                    /**
                     * Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse.
                     */
                    linkId? : string[];
                    

                    /**
                     * Extensions for linkId
                     */
                    _linkId? : IElement[];
                    

                    /**
                     * Response to assets.
                     */
                    answer? : IContract_Answer[];
                    

                    /**
                     * Security labels that protects the asset.
                     */
                    securityLabelNumber? : number[];
                    

                    /**
                     * Extensions for securityLabelNumber
                     */
                    _securityLabelNumber? : IElement[];
                    

                    /**
                     * Contract Valued Item List.
                     */
                    valuedItem? : IContract_ValuedItem[];
                    
            }
        


        export const RTTI_Contract_Asset: t.Type<IContract_Asset> = t.recursion( 'IContract_Asset', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
scope: RTTI_CodeableConcept,
type: t.array(RTTI_CodeableConcept),
typeReference: t.array(RTTI_Reference),
subtype: t.array(RTTI_CodeableConcept),
relationship: RTTI_Coding,
context: t.array(RTTI_Contract_Context),
condition: t.string,
_condition: RTTI_Element,
periodType: t.array(RTTI_CodeableConcept),
period: t.array(RTTI_Period),
usePeriod: t.array(RTTI_Period),
text: t.string,
_text: RTTI_Element,
linkId: t.array(t.string),
_linkId: t.array(RTTI_Element),
answer: t.array(RTTI_Contract_Answer),
securityLabelNumber: t.array(t.number),
_securityLabelNumber: t.array(RTTI_Element),
valuedItem: t.array(RTTI_Contract_ValuedItem)
        })
        
        );
        

        