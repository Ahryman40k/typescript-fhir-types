
        import { Canonical } from '../Scalar/Canonical';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DataRequirement_CodeFilter } from '../Resource/DataRequirement_CodeFilter';
import { DataRequirement_DateFilter } from '../Resource/DataRequirement_DateFilter';
import { DataRequirement_Sort } from '../Resource/DataRequirement_Sort';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { PositiveInt } from '../Scalar/PositiveInt';
import { Reference } from '../Resource/Reference';

        

        /**
         * Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. 
         */
        export class DataRequirement  {

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
                 * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
                 */
                Type? : Code;
                

                /**
                 * Extensions for type
                 */
                _type? : Element;
                

                /**
                 * The profile of the required data, specified as the uri of the profile definition.
                 */
                Profile? : Array<Canonical>;
                

                /**
                 * The intended subjects of the data requirement. If this element is not provided, a Patient subject is assumed.
                 */
                SubjectCodeableConcept? : CodeableConcept;
                

                /**
                 * The intended subjects of the data requirement. If this element is not provided, a Patient subject is assumed.
                 */
                SubjectReference? : Reference;
                

                /**
                 * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. 

The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
                 */
                MustSupport? : Array<String>;
                

                /**
                 * Extensions for mustSupport
                 */
                _mustSupport? : Array<Element>;
                

                /**
                 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
                 */
                CodeFilter? : Array<DataRequirement_CodeFilter>;
                

                /**
                 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
                 */
                DateFilter? : Array<DataRequirement_DateFilter>;
                

                /**
                 * Specifies a maximum number of results that are required (uses the _count search parameter).
                 */
                Limit? : PositiveInt;
                

                /**
                 * Extensions for limit
                 */
                _limit? : Element;
                

                /**
                 * Specifies the order of the results to be returned.
                 */
                Sort? : Array<DataRequirement_Sort>;
                
        }
        