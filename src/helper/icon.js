import React from "react";

const createSvgIcon = ({ svg, displayName }) => {
    const Icon = (props) => React.cloneElement(svg(props), { className: 'svg-icon' });
    Icon.displayName = displayName;
    return Icon;
};
 
const Icon = {
    HomeIcon: createSvgIcon({
        svg: () => (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.25 6.75L9 1.5L15.75 6.75V15C15.75 15.3978 15.592 15.7794 15.3107 16.0607C15.0294 16.342 14.6478 16.5 14.25 16.5H3.75C3.35218 16.5 2.97064 16.342 2.68934 16.0607C2.40804 15.7794 2.25 15.3978 2.25 15V6.75Z"
                    stroke="#ADB4D2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.75 16.5V9H11.25V16.5" stroke="#ADB4D2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        ),
        displayName: 'HomeIcon',
    }),
    ToDoIcon: createSvgIcon({
        svg: () => (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 3H13.5C13.8978 3 14.2794 3.15804 14.5607 3.43934C14.842 3.72064 15 4.10218 15 4.5V15C15 15.3978 14.842 15.7794 14.5607 16.0607C14.2794 16.342 13.8978 16.5 13.5 16.5H4.5C4.10218 16.5 3.72064 16.342 3.43934 16.0607C3.15804 15.7794 3 15.3978 3 15V4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3H6"
                    stroke="#ADB4D2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M11.25 1.5H6.75C6.33579 1.5 6 1.83579 6 2.25V3.75C6 4.16421 6.33579 4.5 6.75 4.5H11.25C11.6642 4.5 12 4.16421 12 3.75V2.25C12 1.83579 11.6642 1.5 11.25 1.5Z"
                    stroke="#ADB4D2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        displayName: 'ToDoIcon',
    }),
    LeaveIcon: createSvgIcon({
        svg: () => (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.25 3H3.75C2.92157 3 2.25 3.67157 2.25 4.5V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V4.5C15.75 3.67157 15.0784 3 14.25 3Z"
                    stroke="#ADB4D2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 1.5V4.5" stroke="#ADB4D2" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M6 1.5V4.5" stroke="#ADB4D2" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M2.25 7.5H15.75" stroke="#ADB4D2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        ),
        displayName: 'LeaveIcon',
    }),
}

export default Icon;