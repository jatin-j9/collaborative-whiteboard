// Define Liveblocks types for your application
// https://liveblocks.io/docs/api-reference/liveblocks-react#Typing-your-data

import { createClient } from '@liveblocks/client';
import { createRoomContext } from '@liveblocks/react';

declare global {
  interface Liveblocks {
    // Each user's Presence, for useMyPresence, useOthers, etc.
    Presence: {
      cursor: { x: number; y: number } | null;
      // selection?: string[];
    };

    // The Storage tree for the room, for useMutation, useStorage, etc.
    // Storage: {
    //   // Define your storage structure here
    //   layers?: unknown;
    //   layerIds?: unknown;
    // };

    // Custom user info set when authenticating with a secret key
    UserMeta: {
      id?: string;
      info?: {
        name?: string;
        picture?: string;
      };
    };

    // Custom events, for useBroadcastEvent, useEventListener
    // RoomEvent:
    //   | { type: 'SELECTION_CHANGE' }
    //   | { type: 'CURSOR_MOVE'; cursor: { x: number; y: number } };

    // Custom metadata set on threads, for useThreads, useCreateThread, etc.
    // ThreadMetadata: {
    //   x: number;
    //   y: number;
    // };

    // Custom room info set with resolveRoomsInfo, for useRoomInfo
    // RoomInfo: {
    //   title: string;
    //   url: string;
    // };
  }
}

const client = createClient({
  throttle: 16,
  authEndpoint: '/api/liveblocks-auth',
});

// Create the RoomProvider and hooks
export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useOthers,
    useSelf,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useStorage,
    useMutation,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
  },
} = createRoomContext(client);
