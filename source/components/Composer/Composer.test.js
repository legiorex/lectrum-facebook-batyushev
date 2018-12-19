import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Composer } from './';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

const props = {
    _createPost: jest.fn(),
    avatar: '',
    currentUserFirstName: '',
};

const comment = 'Merry christmas!';

const initialState = {
    comment: '',
};

const updatedState = {
    comment,
};

const renderTree = renderer.create(<Composer count = { 3 } />).toJSON();

const result = mount(<Composer { ...props } />);


const _submitCommentSpy = jest.spyOn(result.instance(), '_submitComment');
const _handleFormSubmitSpy = jest.spyOn(result.instance(), '_handleFormSubmit');
const _updateCommentSpy = jest.spyOn(result.instance(), '_updateComment');
// const _submitOnEnterSpy = jest.spyOn(result.instance(), '_submitOnEnter');

describe('composer component:', () => {
    test('should have 1 "section" element', () => {
        expect(result.find('section')).toHaveLength(1);
    });

    test('should have 1 "form" element', () => {
        expect(result.find('form')).toHaveLength(1);
    });

    test('should have 1 "textarea" element', () => {
        expect(result.find('textarea')).toHaveLength(1);
    });

    test('should have 1 "img" element', () => {
        expect(result.find('img')).toHaveLength(1);
    });

    test('should have 1 "input" element', () => {
        expect(result.find('input')).toHaveLength(1);
    });

    test('should have valid initial state', () => {
        expect(result.state()).toEqual(initialState);
    });

    test('textarea value should be empty initially', () => {
        expect(result.find('textarea').text()).toBe('');
    });

    test('should respond to state change properly', () => {
        result.setState({
            comment,
        });
        expect(result.state()).toEqual(updatedState);
        expect(result.find('textarea').text()).toBe(comment);
        result.setState({
            comment: '',
        });
        expect(result.state()).toEqual(initialState);
        expect(result.find('textarea').text()).toBe('');
    });

    test('should handle textarea "change" event', () => {
        result.find('textarea').simulate('change', {
            target: {
                value: comment,
            },
        });
        expect(result.find('textarea').text()).toBe(comment);
        expect(result.state()).toEqual(updatedState);
    });

    test('should handle form "submit" event', () => {
        result.find('form').simulate('submit');

        expect(result.state()).toEqual(initialState);
    });


    test('_createPost prop should be invoked once after form submission', () => {
        
        expect(props._createPost).toBeCalledTimes(1);
    });


    test('_submitComment, _handleFormSubmitSpy, _updateCommentSpy,  class methods should be invoke once after form in submitted', () => {
        
        expect(_submitCommentSpy).toBeCalledTimes(1);
        expect(_handleFormSubmitSpy).toBeCalledTimes(1);
        expect(_updateCommentSpy).toBeCalledTimes(1);
        
    });

    test("должен менять свойство состояния state.comment текстовым контентом, будучи вызванным в качестве обработчика события onChange", () => {
        result.instance()._updateComment({
            
            target: {
                value: '123',
            },
            
        });
        expect(result.state("comment")).toBe("123");

        
    });

    

















    test('composer component should correspond to its snapshot composerpart', () => {
        expect(renderTree).toMatchSnapshot();
    });
    

});


