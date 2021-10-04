import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(/* email */) {
  throw new NotImplementedError('Not implemented');
  function getEmailDomain(input) {
    var first_split = input.split("@")[1];
    var second_split = first_split.split(".");
        if(second_split.length == 2) {
  //         console.log('domain is : '+first_split);
           return first_split;
   
        } else if(second_split.length > 2) {
            var str = first_split.substring(first_split.indexOf(".") + 1);
 //         console.log('domain is : '+str);
           return str;
        }
   }
}
