import React from "react";

import './Tabs.css';

export const Tabs = ({ tabs, setActiveTab }: { tabs: Array<{ text: string, isActive: boolean }>, setActiveTab: any }) => {
    return (
        <div className="tabs">
            {tabs.map((tab: { text: string, isActive: boolean }, index) => {
                return (
                    <div
                        key={tab.text}
                        className={`tab ${tab.isActive ? 'active' : ''}`}
                        onClick={() => {
                            const temp = tabs;
                            temp.forEach((el) => {
                                el.isActive = false;
                            });
                            temp[index].isActive = true;

                            setActiveTab([...temp]);
                        }}
                    >
                        <p>{tab.text}</p>
                    </div>
                );
            })}
        </div>
    );
};
