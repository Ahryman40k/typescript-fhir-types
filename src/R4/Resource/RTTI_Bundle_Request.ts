import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_uri} from '../Scalar/RTTI_uri';
import {RTTI_instant} from '../Scalar/RTTI_instant';
export enum Bundle_RequestMethodKind {
  _get = 'GET',
  _head = 'HEAD',
  _post = 'POST',
  _put = 'PUT',
  _delete = 'DELETE',
  _patch = 'PATCH',
}
import {createEnumType} from '../../EnumType';

export interface IBundle_Request {
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
   * In a transaction or batch, this is the HTTP action to be executed for this entry. In a history bundle, this indicates the HTTP action that occurred.
   */
  method?: Bundle_RequestMethodKind;

  /**
   * Extensions for method
   */
  _method?: IElement;

  /**
   * The URL for this entry, relative to the root (the address to which the request is posted).
   */
  url?: string;

  /**
   * Extensions for url
   */
  _url?: IElement;

  /**
   * If the ETag values match, return a 304 Not Modified status. See the API documentation for ["Conditional Read"](http.html#cread).
   */
  ifNoneMatch?: string;

  /**
   * Extensions for ifNoneMatch
   */
  _ifNoneMatch?: IElement;

  /**
   * Only perform the operation if the last updated date matches. See the API documentation for ["Conditional Read"](http.html#cread).
   */
  ifModifiedSince?: string;

  /**
   * Extensions for ifModifiedSince
   */
  _ifModifiedSince?: IElement;

  /**
   * Only perform the operation if the Etag value matches. For more information, see the API section ["Managing Resource Contention"](http.html#concurrency).
   */
  ifMatch?: string;

  /**
   * Extensions for ifMatch
   */
  _ifMatch?: IElement;

  /**
   * Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for ["Conditional Create"](http.html#ccreate). This is just the query portion of the URL - what follows the "?" (not including the "?").
   */
  ifNoneExist?: string;

  /**
   * Extensions for ifNoneExist
   */
  _ifNoneExist?: IElement;
}

export const RTTI_Bundle_Request: t.Type<IBundle_Request> = t.recursion(
  'IBundle_Request',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      method: createEnumType<Bundle_RequestMethodKind>(
        Bundle_RequestMethodKind,
        'Bundle_RequestMethodKind',
      ),
      _method: RTTI_Element,
      url: RTTI_uri,
      _url: RTTI_Element,
      ifNoneMatch: t.string,
      _ifNoneMatch: RTTI_Element,
      ifModifiedSince: RTTI_instant,
      _ifModifiedSince: RTTI_Element,
      ifMatch: t.string,
      _ifMatch: RTTI_Element,
      ifNoneExist: t.string,
      _ifNoneExist: RTTI_Element,
    }),
);
