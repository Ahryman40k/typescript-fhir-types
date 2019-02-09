
        import { Code } from '../Scalar/Code';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';

        export enum GraphDefinitionCompartmentUseKind {
                condition,
requirement
            }
export enum GraphDefinitionCompartmentRuleKind {
                identical,
matching,
different,
custom
            }

        /**
         * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. 
         */
        export class GraphDefinition_Compartment  {

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
                 * Defines how the compartment rule is used - whether it it is used to test whether resources are subject to the rule, or whether it is a rule that must be followed.
                 */
                use? : GraphDefinitionCompartmentUseKind;
                

                /**
                 * Extensions for use
                 */
                _use? : Element;
                

                /**
                 * Identifies the compartment.
                 */
                code? : Code;
                

                /**
                 * Extensions for code
                 */
                _code? : Element;
                

                /**
                 * identical | matching | different | no-rule | custom.
                 */
                rule? : GraphDefinitionCompartmentRuleKind;
                

                /**
                 * Extensions for rule
                 */
                _rule? : Element;
                

                /**
                 * Custom rule, as a FHIRPath expression.
                 */
                expression? : string;
                

                /**
                 * Extensions for expression
                 */
                _expression? : Element;
                

                /**
                 * Documentation for FHIRPath expression.
                 */
                description? : string;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                
        }
        