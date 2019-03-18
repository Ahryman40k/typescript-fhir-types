
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Range, IRange} from './RTTI_Range';




            export interface ISubstanceReferenceInformation_Relationship {
                
                
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
                     * Todo.
                     */
                    substanceReference? : IReference;
                    

                    /**
                     * Todo.
                     */
                    substanceCodeableConcept? : ICodeableConcept;
                    

                    /**
                     * Todo.
                     */
                    relationship? : ICodeableConcept;
                    

                    /**
                     * Todo.
                     */
                    interaction? : ICodeableConcept;
                    

                    /**
                     * Todo.
                     */
                    isDefining? : boolean;
                    

                    /**
                     * Extensions for isDefining
                     */
                    _isDefining? : IElement;
                    

                    /**
                     * Todo.
                     */
                    amountQuantity? : IQuantity;
                    

                    /**
                     * Todo.
                     */
                    amountRange? : IRange;
                    

                    /**
                     * Todo.
                     */
                    amountString? : string;
                    

                    /**
                     * Extensions for amountString
                     */
                    _amountString? : IElement;
                    

                    /**
                     * Todo.
                     */
                    amountType? : ICodeableConcept;
                    

                    /**
                     * Todo.
                     */
                    amountText? : string;
                    

                    /**
                     * Extensions for amountText
                     */
                    _amountText? : IElement;
                    

                    /**
                     * Todo.
                     */
                    source? : IReference[];
                    
            }
        


        export const RTTI_SubstanceReferenceInformation_Relationship: t.Type<ISubstanceReferenceInformation_Relationship> = t.recursion( 'ISubstanceReferenceInformation_Relationship', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
substanceReference: RTTI_Reference,
substanceCodeableConcept: RTTI_CodeableConcept,
relationship: RTTI_CodeableConcept,
interaction: RTTI_CodeableConcept,
isDefining: t.boolean,
_isDefining: RTTI_Element,
amountQuantity: RTTI_Quantity,
amountRange: RTTI_Range,
amountString: t.string,
_amountString: RTTI_Element,
amountType: RTTI_CodeableConcept,
amountText: t.string,
_amountText: RTTI_Element,
source: t.array(RTTI_Reference)
        })
        
        );
        

        