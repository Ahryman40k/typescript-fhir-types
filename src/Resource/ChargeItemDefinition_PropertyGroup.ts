
        import { ChargeItemDefinition_Applicability } from '../Resource/ChargeItemDefinition_Applicability';
import { ChargeItemDefinition_PriceComponent } from '../Resource/ChargeItemDefinition_PriceComponent';
import { Extension } from '../Resource/Extension';

        

        /**
         * The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. 
         */
        export class ChargeItemDefinition_PropertyGroup  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * Expressions that describe applicability criteria for the priceComponent.
                 */
                applicability? : ChargeItemDefinition_Applicability[];
                

                /**
                 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under developement. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated.
                 */
                priceComponent? : ChargeItemDefinition_PriceComponent[];
                
        }
        