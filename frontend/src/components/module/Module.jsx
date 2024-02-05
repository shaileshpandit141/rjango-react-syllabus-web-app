import React from 'react'
import './Module.css'
import RightAngleImage from '../../assets/icons/right-angle.svg'
import Submodule from '../submodule/Submodule'
import requestToServer from '../../requestToServer/requestToServer'


export default function Module(params) {


    function moduleCilck(moduleCardId, actionId, subModuleId) {
        const moduleCardIdEl = document.getElementById(moduleCardId)
        const actionIdEl = document.getElementById(actionId)
        const subModuleIdEl = document.getElementById(subModuleId)

        const state = moduleCardIdEl.getAttribute('state')

        if (state === 'true') {
            moduleCardIdEl.setAttribute('state', false)
            moduleCardIdEl.style.backgroundColor = 'var(--active)'
            actionIdEl.style.transform = 'rotate(90deg)'
            subModuleIdEl.style.height = 'fit-content'
            subModuleIdEl.style.paddingBottom = '16px'

        } else {
            moduleCardIdEl.setAttribute('state', true)
            moduleCardIdEl.style.backgroundColor = 'var(--other)'
            actionIdEl.style.transform = 'rotate(0deg)'
            subModuleIdEl.style.height = '0'
            subModuleIdEl.style.paddingBottom = '0'
        }
    }


    const module = params.module

    const [subModuleList, setSubModuleList] = React.useState([])

    React.useEffect(() => {
        requestToServer(`api/sub-modules/${module.id}/`)
            .then(res => {
                setSubModuleList(res)
            })
    }, [module])

    const subModuleListElements = subModuleList.map(subModule => {
        return (
            <Submodule
                key={subModule.id}
                subModule={subModule}
            />
        )
    })


    return (
        <div id={`moduleCardId-${module.id}`} state={'true'} className='module--card'>
            <div
                className='module--btn'
                onClick={() => moduleCilck(
                    `moduleCardId-${module.id}`,
                    `actionId-${module.id}`,
                    `subModuleId-${module.id}`
                )}
            >
                <h2 className='module--text--container'>
                    {/* <span>M{module.id}.</span> */}
                    <span>{module.name}</span>
                </h2>
                <div className='action--arrow--icon--container'>
                    <figure id={`actionId-${module.id}`} className='action--figure--container'>
                        <img src={RightAngleImage} alt={RightAngleImage} />
                    </figure>
                </div>
            </div>

            <ol id={`subModuleId-${module.id}`} className='sub--module--container'>

                {subModuleListElements}

            </ol>
        </div>
    )
}
