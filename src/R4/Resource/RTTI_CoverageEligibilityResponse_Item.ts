
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CoverageEligibilityResponse_Benefit, ICoverageEligibilityResponse_Benefit} from './RTTI_CoverageEligibilityResponse_Benefit';




            export interface ICoverageEligibilityResponse_Item {
                
                
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
                     * High-level Dental, Vision, Medical, Pharmacy, Rehab etc. and detailed types of services: Dental: basic, major, ortho; Vision exam, glasses, contacts; etc.
                     */
                    category? : ICodeableConcept;
                    

                    /**
                     * A code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI).
                     */
                    billcode? : ICodeableConcept;
                    

                    /**
                     * Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
                     */
                    modifier? : ICodeableConcept[];
                    

                    /**
                     * The practitioner who is responsible for the services rendered to the patient.
                     */
                    provider? : IReference;
                    

                    /**
                     * True if the indicated class of service is excluded from the plan, missing or False indicated the service is included in the coverage.
                     */
                    excluded? : boolean;
                    

                    /**
                     * Extensions for excluded
                     */
                    _excluded? : IElement;
                    

                    /**
                     * A short name or tag for the benefit, for example MED01, or DENT2.
                     */
                    name? : string;
                    

                    /**
                     * Extensions for name
                     */
                    _name? : IElement;
                    

                    /**
                     * A richer description of the benefit, for example 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
                     */
                    description? : string;
                    

                    /**
                     * Extensions for description
                     */
                    _description? : IElement;
                    

                    /**
                     * Network designation.
                     */
                    network? : ICodeableConcept;
                    

                    /**
                     * Unit designation: individual or family.
                     */
                    unit? : ICodeableConcept;
                    

                    /**
                     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
                     */
                    term? : ICodeableConcept;
                    

                    /**
                     * Benefits used to date.
                     */
                    benefit? : ICoverageEligibilityResponse_Benefit[];
                    

                    /**
                     * A boolean flag indicating whether a prior authorization or pre-authorization is required prior to actual service delivery.
                     */
                    authorizationRequired? : boolean;
                    

                    /**
                     * Extensions for authorizationRequired
                     */
                    _authorizationRequired? : IElement;
                    

                    /**
                     * Codes or comments regarding information or actions assciated with the pre-authorization.
                     */
                    authorizationSupporting? : ICodeableConcept[];
                    

                    /**
                     * A descriptive document location.
                     */
                    authorizationUrl? : string;
                    

                    /**
                     * Extensions for authorizationUrl
                     */
                    _authorizationUrl? : IElement;
                    
            }
        


        export const RTTI_CoverageEligibilityResponse_Item: t.Type<ICoverageEligibilityResponse_Item> = t.recursion( 'ICoverageEligibilityResponse_Item', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
category: RTTI_CodeableConcept,
billcode: RTTI_CodeableConcept,
modifier: t.array(RTTI_CodeableConcept),
provider: RTTI_Reference,
excluded: t.boolean,
_excluded: RTTI_Element,
name: t.string,
_name: RTTI_Element,
description: t.string,
_description: RTTI_Element,
network: RTTI_CodeableConcept,
unit: RTTI_CodeableConcept,
term: RTTI_CodeableConcept,
benefit: t.array(RTTI_CoverageEligibilityResponse_Benefit),
authorizationRequired: t.boolean,
_authorizationRequired: RTTI_Element,
authorizationSupporting: t.array(RTTI_CodeableConcept),
authorizationUrl: t.string,
_authorizationUrl: RTTI_Element
        })
        
        );
        

        