
        import { Code } from '../Scalar/Code';
import { Decimal } from '../Scalar/Decimal';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Uri } from '../Scalar/Uri';

        export enum QuantityComparatorKind {
                lower,
lowerOrEqual,
greaterOrEqual,
greater
            }

        /**
         * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. 
         */
        export class Quantity  {

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
                 * The value of the measured amount. The value includes an implicit precision in the presentation of the value.
                 */
                value? : Decimal;
                

                /**
                 * Extensions for value
                 */
                _value? : Element;
                

                /**
                 * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.
                 */
                comparator? : QuantityComparatorKind;
                

                /**
                 * Extensions for comparator
                 */
                _comparator? : Element;
                

                /**
                 * A human-readable form of the unit.
                 */
                unit? : string;
                

                /**
                 * Extensions for unit
                 */
                _unit? : Element;
                

                /**
                 * The identification of the system that provides the coded form of the unit.
                 */
                system? : Uri;
                

                /**
                 * Extensions for system
                 */
                _system? : Element;
                

                /**
                 * A computer processable form of the unit in some unit representation system.
                 */
                code? : Code;
                

                /**
                 * Extensions for code
                 */
                _code? : Element;
                
        }
        