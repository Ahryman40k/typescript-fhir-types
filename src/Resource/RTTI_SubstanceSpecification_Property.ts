
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';




            export interface ISubstanceSpecification_Property {
                
                
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
                     * Description todo.
                     */
                    type? : ICodeableConcept;
                    

                    /**
                     * Description todo.
                     */
                    name? : ICodeableConcept;
                    

                    /**
                     * A field that should be used to capture parameters that were used in the measurement of a property.
                     */
                    parameters? : string;
                    

                    /**
                     * Extensions for parameters
                     */
                    _parameters? : IElement;
                    

                    /**
                     * Identifier for a substance upon which a defining property depends.
                     */
                    substanceId? : IIdentifier;
                    

                    /**
                     * Description todo.
                     */
                    substanceName? : string;
                    

                    /**
                     * Extensions for substanceName
                     */
                    _substanceName? : IElement;
                    

                    /**
                     * Quantitative value for this property.
                     */
                    amount? : string;
                    

                    /**
                     * Extensions for amount
                     */
                    _amount? : IElement;
                    
            }
        


        export const RTTI_SubstanceSpecification_Property: t.Type<ISubstanceSpecification_Property> = t.recursion( 'ISubstanceSpecification_Property', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: RTTI_CodeableConcept,
name: RTTI_CodeableConcept,
parameters: t.string,
_parameters: RTTI_Element,
substanceId: RTTI_Identifier,
substanceName: t.string,
_substanceName: RTTI_Element,
amount: t.string,
_amount: RTTI_Element
        })
        
        );
        

        