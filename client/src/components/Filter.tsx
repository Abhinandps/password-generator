import React, { useState } from 'react'
import InputRange from './InputRange';

function Filter({ passwordSettings, handleSettingsChange }: any) {


    return (
        <div>
            <InputRange
                type="range"
                name="length"
                min={4}
                max={20}
                step={1}
                initialValue={passwordSettings.length}
                onLengthChange={handleSettingsChange}
            />
            <label>
                ABC
                <input
                    type="checkbox"
                    name="includeUppercase"
                    checked={passwordSettings.includeUppercase}
                    onChange={handleSettingsChange}
                />
            </label>
            <label>
                abc
                <input
                    type="checkbox"
                    name="includeLowercase"
                    checked={passwordSettings.includeLowercase}
                    onChange={handleSettingsChange}
                />
            </label>
            <label>
                123
                <input
                    type="checkbox"
                    name="includeNumbers"
                    checked={passwordSettings.includeNumbers}
                    onChange={handleSettingsChange}
                />
            </label>
            <label>
                #$&
                <input
                    type="checkbox"
                    name="includeSpecialCharacters"
                    checked={passwordSettings.includeSpecialCharacters}
                    onChange={handleSettingsChange}
                />
            </label>
        </div>
    )
}

export default Filter