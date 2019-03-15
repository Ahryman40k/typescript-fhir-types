
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Reference, IReference} from './RTTI_Reference';




            export interface ICoverageEligibilityRequest_Insurance {
                
                    /**
                     * Financial instrument by which payment information for health care.
                     */
                    coverage : IReference;
                    
                
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
                     * A flag to indicate that this Coverage is the focus for adjudication. The Coverage against which the claim is to be adjudicated.
                     */
                    focal? : boolean;
                    

                    /**
                     * Extensions for focal
                     */
                    _focal? : IElement;
                    

                    /**
                     * The contract number of a business agreement which describes the terms and conditions.
                     */
                    businessArrangement? : string;
                    

                    /**
                     * Extensions for businessArrangement
                     */
                    _businessArrangement? : IElement;
                    
            }
        


        export const RTTI_CoverageEligibilityRequest_Insurance: t.Type<ICoverageEligibilityRequest_Insurance> = t.recursion( 'ICoverageEligibilityRequest_Insurance', () =>
            t.intersection([
                
        t.type({
           coverage: RTTI_Reference
        })
        ,
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
focal: t.boolean,
_focal: RTTI_Element,
businessArrangement: t.string,
_businessArrangement: RTTI_Element
        })
        
            ])
        );
        

        