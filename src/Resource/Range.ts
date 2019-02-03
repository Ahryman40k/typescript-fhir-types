
        import { Extension } from '../Resource/Extension';
import { Quantity } from '../Resource/Quantity';

        

        /**
         * A set of ordered Quantities defined by a low and high limit. 
         */
        export class Range  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                Id? : String;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * The low limit. The boundary is inclusive.
                 */
                Low? : Quantity;
                

                /**
                 * The high limit. The boundary is inclusive.
                 */
                High? : Quantity;
                
        }
        