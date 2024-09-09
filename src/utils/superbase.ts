export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      allVehiclesDatabase: {
        Row: {
          combined_search: string | null
          created_at: string
          id: number
          owner_name: string | null
          tow_jobs: Json | null
          vehicle_color: string | null
          vehicle_number_plate: string | null
          vehicle_ref: string
          vehicle_type: string | null
        }
        Insert: {
          combined_search?: string | null
          created_at?: string
          id?: number
          owner_name?: string | null
          tow_jobs?: Json | null
          vehicle_color?: string | null
          vehicle_number_plate?: string | null
          vehicle_ref?: string
          vehicle_type?: string | null
        }
        Update: {
          combined_search?: string | null
          created_at?: string
          id?: number
          owner_name?: string | null
          tow_jobs?: Json | null
          vehicle_color?: string | null
          vehicle_number_plate?: string | null
          vehicle_ref?: string
          vehicle_type?: string | null
        }
        Relationships: []
      }
      supaDatabase: {
        Row: {
          created_at: string
          id: number
          infomation: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          infomation?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          infomation?: string | null
        }
        Relationships: []
      }
      testRelationship: {
        Row: {
          created_at: string
          id: string
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      towingJobs: {
        Row: {
          created_at: string
          id: number
          jobstatus: boolean | null
          towDate: string | null
          type: string | null
          vehicleOwner: string | null
          vehicleTowed: string
        }
        Insert: {
          created_at?: string
          id?: number
          jobstatus?: boolean | null
          towDate?: string | null
          type?: string | null
          vehicleOwner?: string | null
          vehicleTowed?: string
        }
        Update: {
          created_at?: string
          id?: number
          jobstatus?: boolean | null
          towDate?: string | null
          type?: string | null
          vehicleOwner?: string | null
          vehicleTowed?: string
        }
        Relationships: [
          {
            foreignKeyName: "towingJobs_vehicleOwner_fkey"
            columns: ["vehicleOwner"]
            isOneToOne: false
            referencedRelation: "vehicleOwners"
            referencedColumns: ["refID"]
          },
          {
            foreignKeyName: "towingJobs_vehicleTowed_fkey"
            columns: ["vehicleTowed"]
            isOneToOne: true
            referencedRelation: "allVehiclesDatabase"
            referencedColumns: ["vehicle_ref"]
          },
        ]
      }
      vehicleDatabase: {
        Row: {
          created_at: string
          id: number
          owner_name: string | null
          refID: string | null
          tow_jobs: Json | null
          vehicle_color: string | null
          vehicle_number_plate: string | null
          vehicle_owner: string | null
          vehicle_owner_name: string | null
          vehicle_type: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          owner_name?: string | null
          refID?: string | null
          tow_jobs?: Json | null
          vehicle_color?: string | null
          vehicle_number_plate?: string | null
          vehicle_owner?: string | null
          vehicle_owner_name?: string | null
          vehicle_type?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          owner_name?: string | null
          refID?: string | null
          tow_jobs?: Json | null
          vehicle_color?: string | null
          vehicle_number_plate?: string | null
          vehicle_owner?: string | null
          vehicle_owner_name?: string | null
          vehicle_type?: string | null
        }
        Relationships: []
      }
      vehicleOwners: {
        Row: {
          created_at: string
          id: number
          owner: string | null
          refID: string
        }
        Insert: {
          created_at?: string
          id?: number
          owner?: string | null
          refID?: string
        }
        Update: {
          created_at?: string
          id?: number
          owner?: string | null
          refID?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
