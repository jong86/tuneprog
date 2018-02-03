import update from 'react-addons-update'

initialState = {
  multiTracks: {},
}

const rootReducer = (state = initialState, action) => {
  const { audioTrackIndex, multiTrackId } = action;
  switch (action.type) {

    case 'ADD_MULTI_TRACK':
      const { multiTrackData } = action;
      return update(state, {
        multiTracks: {
          [multiTrackData.id]: {$set: multiTrackData}
        }
      })

    case 'SAVE_SOUND':
      return update(state, {
        multiTracks: {
          [multiTrackId]: {
            audioTracks: {$push: [action.soundData]},
          }
        }
      })

    case 'TOGGLE_ARM_TRACK':
      // Unarms all tracks first (track arming is exclusive):
      const targetTrackList = state.multiTracks[multiTrackId].audioTracks
      const targetTrack = state.multiTracks[multiTrackId].audioTracks[audioTrackIndex];
      if (!targetTrack.isArmed) {
        for (let i = 0; i < targetTrackList.length; i++) {
          targetTrackList[i].isArmed = false;
        }
        return update(state, {
          multiTracks: {
            [multiTrackId]: {
              audioTracks: {
                [audioTrackIndex]: {
                  isArmed: {$set: true}
                }
              }
            }
          }
        })
      }

    default:
      return state;
  }
}

export default rootReducer
