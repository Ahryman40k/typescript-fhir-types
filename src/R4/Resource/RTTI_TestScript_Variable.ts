import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_id} from '../Scalar/RTTI_id';

export interface ITestScript_Variable {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * Descriptive name for this variable.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * A default, hard-coded, or user-defined value for this variable.
   */
  defaultValue?: string;

  /**
   * Extensions for defaultValue
   */
  _defaultValue?: IElement;

  /**
   * A free text natural language description of the variable and its purpose.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * The FHIRPath expression to evaluate against the fixture body. When variables are defined, only one of either expression, headerField or path must be specified.
   */
  expression?: string;

  /**
   * Extensions for expression
   */
  _expression?: IElement;

  /**
   * Will be used to grab the HTTP header field value from the headers that sourceId is pointing to.
   */
  headerField?: string;

  /**
   * Extensions for headerField
   */
  _headerField?: IElement;

  /**
   * Displayable text string with hint help information to the user when entering a default value.
   */
  hint?: string;

  /**
   * Extensions for hint
   */
  _hint?: IElement;

  /**
   * XPath or JSONPath to evaluate against the fixture body.  When variables are defined, only one of either expression, headerField or path must be specified.
   */
  path?: string;

  /**
   * Extensions for path
   */
  _path?: IElement;

  /**
   * Fixture to evaluate the XPath/JSONPath expression or the headerField  against within this variable.
   */
  sourceId?: string;

  /**
   * Extensions for sourceId
   */
  _sourceId?: IElement;
}

export const RTTI_TestScript_Variable: t.Type<ITestScript_Variable> =
  t.recursion('ITestScript_Variable', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      name: t.string,
      _name: RTTI_Element,
      defaultValue: t.string,
      _defaultValue: RTTI_Element,
      description: t.string,
      _description: RTTI_Element,
      expression: t.string,
      _expression: RTTI_Element,
      headerField: t.string,
      _headerField: RTTI_Element,
      hint: t.string,
      _hint: RTTI_Element,
      path: t.string,
      _path: RTTI_Element,
      sourceId: RTTI_id,
      _sourceId: RTTI_Element,
    }),
  );
