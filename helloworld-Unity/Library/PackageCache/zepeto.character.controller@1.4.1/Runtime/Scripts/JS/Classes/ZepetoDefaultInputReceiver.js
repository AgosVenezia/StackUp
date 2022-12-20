/*
@name ZepetoDefaultInputReceiver
*/
var CS = require('csharp');

module.exports = class ZepetoDefaultInputReceiver {
    Initialize(character, camera) {
        this.zepetoCharacter = character;
        this.zepetoCamera = camera;
        this.isMovingCharacter = false;
        this.isMovingScreen = false;
        this.moveValue = null;
    }

    Move() {
        this.isMovingCharacter = true;
        let value = CS.UnityEngine.Quaternion.Euler( 0, this.zepetoCamera.rotation.eulerAngles.y, 0 );
        let modifiedMoveValue = CS.UnityEngine.Quaternion.op_Multiply( value, this.moveValue );
        this.zepetoCharacter.MoveContinuously( modifiedMoveValue );
    }

    StopMoving() {
        this.zepetoCharacter.StopMoving();
        this.isMovingCharacter = false;
    }

    OnMove( context ) {
        var readValue = context.ReadValueAsObject();

        this.moveValue = new CS.UnityEngine.Vector3( readValue.x, 0, readValue.y );

        if( context.phase === CS.UnityEngine.InputSystem.InputActionPhase.Performed ) {
            this.Move();
        } else if( context.phase === CS.UnityEngine.InputSystem.InputActionPhase.Canceled ) {
            this.StopMoving();
        }
    }

    OnLook( context ) {
        if( context.phase === CS.UnityEngine.InputSystem.InputActionPhase.Performed ) {
            if( this.isMovingScreen ) {
                this.zepetoCamera.Rotate( context.ReadValueAsObject() );
                if( this.isMovingCharacter ) {
                    this.Move();
                }
            }
        }
    }

    OnTouchScreen( context ) {
        if( context.phase === CS.UnityEngine.InputSystem.InputActionPhase.Performed ) {
            this.isMovingScreen = true;
        } else if( context.phase === CS.UnityEngine.InputSystem.InputActionPhase.Canceled ) {
            this.isMovingScreen = false;
        }
    }

    OnZoom( context ) {
        if( context.phase === CS.UnityEngine.InputSystem.InputActionPhase.Performed ) {
            this.zepetoCamera.DoZoom( context.ReadValueAsObject() );
        }
    }

    OnJump( context ) {
        if( context.phase === CS.UnityEngine.InputSystem.InputActionPhase.Performed ) {
            this.zepetoCharacter.Jump();
        }
    }
}