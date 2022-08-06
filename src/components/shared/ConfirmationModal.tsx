import * as React from 'react'
import Modal from '@mui/material/Modal'

import { WHITE } from '@/utils/colors'
import { ControlButton } from '@/components/shared/styled/ControlButton'
import { Scenes } from '@/types'

type Props = {
    isOpen: boolean
    setIsModalOpen: (isOpen: boolean) => void
    finalAction: () => void
    primaryColor: string
    scene: Scenes
}

export function ConfirmationModal({
    isOpen,
    setIsModalOpen,
    finalAction,
    primaryColor,
    scene,
}: Props) {
    const closeModal = React.useCallback(() => setIsModalOpen(false), [setIsModalOpen])

    return (
        <Modal
            open={isOpen}
            onClose={closeModal}
            onBackdropClick={closeModal}
            aria-labelledby="Confirm"
            aria-describedby="Confirm"
            className="zoom"
        >
            <div className="flex h-full w-full">
                <div
                    className="m-auto w-[400px] h-[200px] relative bg-dm-dark-gray crt rounded-xl"
                    style={{
                        border: `1px solid ${primaryColor}`,
                        boxShadow: `0 1px 1px rgba(0,0,0,0.12),
                         0 2px 2px rgba(0,0,0,0.12),
                         0 4px 4px rgba(0,0,0,0.12),
                         0 8px 8px rgba(0,0,0,0.12),
                         0 16px 16px rgba(0,0,0,0.12),
                         0 1px 1px rgba(0,0,0,0.12),
                         0 2px 2px rgba(0,0,0,0.12),
                         0 4px 4px rgba(0,0,0,0.12),
                         0 8px 8px rgba(0,0,0,0.12),
                         0 16px 16px rgba(0,0,0,0.12),
                         0 1px 1px rgba(0,0,0,0.12),
                         0 2px 2px rgba(0,0,0,0.12),
                         0 4px 4px rgba(0,0,0,0.12),
                         0 8px 8px rgba(0,0,0,0.12),
                         0 16px 16px rgba(0,0,0,0.12),
                         0 1px 1px rgba(0,0,0,0.12),
                         0 2px 2px rgba(0,0,0,0.12),
                         0 4px 4px rgba(0,0,0,0.12),
                         0 8px 8px rgba(0,0,0,0.12),
                         0 16px 16px rgba(0,0,0,0.12)`,
                    }}
                >
                    <button
                        type="button"
                        onClick={closeModal}
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: '-5px',
                            padding: '10px',
                            background: 'none',
                            border: 'none',
                            color: '#fff',
                            fontSize: '1.75rem',
                            cursor: 'pointer',
                            zIndex: 999,
                        }}
                    >
                        &#10006;
                    </button>
                    <div className="p-4">
                        <h2 className="text-center mb-1 text-2xl">CONFIRM ACTION</h2>
                        <div className="flex flex-col">
                            <p className="text-lg leading-tight p-4 pt-1">
                                {scene === Scenes.Operation
                                    ? 'Are you sure you want to abort this Operation? You will lose all money and supplies gained this Operation.'
                                    : 'Are you sure you want to retreat? Your shield will recharge to its max level, but lost HP will not regenerate.'}
                            </p>
                            <div className="flex">
                                <div className="mx-auto my-2">
                                    <ControlButton primaryColor={WHITE} onClick={closeModal}>
                                        Cancel
                                    </ControlButton>
                                </div>
                                <div className="mx-auto my-2">
                                    <ControlButton
                                        primaryColor={primaryColor}
                                        onClick={finalAction}
                                    >
                                        Continue
                                    </ControlButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
