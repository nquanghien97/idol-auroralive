'use client';

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ArrowDown, ArrowRight } from 'lucide-react'
import React, { useEffect, useId, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import Select from 'react-select';
import { vi } from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Popup from './Popup';
import { ToastContainer, toast } from 'react-toastify';

type POSITION_TYPE =
  | 'idol_livestream'
  | 'livestream_seller'
  | 'team_lead_seller'
  | 'team_lead_idol'
  | 'hr_admin'

type EDUCATION_TYPE =
  | 'not_graduated'
  | 'high_school'
  | 'vocational'
  | 'college'
  | 'university'
  | 'postgraduate';

type GENDER_TYPE =
  | 'MALE'
  | 'FEMALE'
  | 'OTHER'

interface FormValues {
  position: POSITION_TYPE;
  fullName: string;
  phoneNumber: string;
  dateOfBirth: Date;
  gender: GENDER_TYPE;
  citizenIdentificationNumber: string;
  hometown: string;
  address: string;
  education: EDUCATION_TYPE;
  school?: string;
  tiktokLink: string;
  facebookLink: string;
  currentJob: string;
  income12MonthsAgo: string;
  incomeGoalAfter3Months: string;
  incomeGoalAfter6Months: string;
  incomeGoalAfter12Months: string;
  fileCv?: File[]
}

const formSchema = yup.object({
  position: yup
    .mixed<'idol_livestream' | 'livestream_seller' | 'team_lead_seller' | 'team_lead_idol' | 'hr_admin'>()
    .oneOf(['idol_livestream', 'livestream_seller', 'team_lead_seller', 'team_lead_idol', 'hr_admin'])
    .required('Vui lòng chọn vị trí mong muốn'),

  fullName: yup.string().required('Họ và tên là bắt buộc'),

  phoneNumber: yup
    .string()
    .matches(/^0\d{9}$/, 'Số điện thoại phải có 10 chữ số và bắt đầu bằng 0')
    .required('Số điện thoại là bắt buộc'),

  dateOfBirth: yup
    .date()
    .max(new Date(), 'Ngày sinh không hợp lệ')
    .required('Ngày sinh là bắt buộc'),

  gender: yup
    .mixed<'MALE' | 'FEMALE' | 'OTHER'>()
    .oneOf(['MALE', 'FEMALE', 'OTHER'], 'Giới tính không hợp lệ')
    .required('Giới tính là bắt buộc'),

  citizenIdentificationNumber: yup
    .string()
    .matches(/^0\d{11}$/, 'CCCD phải gồm 12 chữ số và bắt đầu bằng số 0')
    .required('Vui lòng nhập số CCCD'),

  hometown: yup.string().required('Vui lòng nhập quê quán'),

  address: yup.string().required('Vui lòng nhập địa chỉ thường trú'),

  education: yup
    .mixed<
      | 'not_graduated'
      | 'high_school'
      | 'vocational'
      | 'college'
      | 'university'
      | 'postgraduate'
    >()
    .oneOf(['not_graduated', 'high_school', 'vocational', 'college', 'university', 'postgraduate'])
    .required('Vui lòng chọn trình độ học vấn'),

  school: yup
    .string(),

  tiktokLink: yup
    .string()
    .url('Link TikTok không hợp lệ')
    .required('Vui lòng nhập link kênh Tiktok'),

  facebookLink: yup
    .string()
    .url('Link Facebook/Instagram không hợp lệ')
    .required('Vui lòng nhập link Facebook cá nhân'),

  currentJob: yup.string().required('Vui lòng nhập nghề nghiệp hiện tại'),

  income12MonthsAgo: yup.string().required('Vui lòng nhập thu nhập trung bình 12 tháng trước'),

  incomeGoalAfter3Months: yup.string().required('Vui lòng nhập mục tiêu thu nhập sau 3 tháng'),

  incomeGoalAfter6Months: yup.string().required('Vui lòng nhập mục tiêu thu nhập sau 6 tháng'),

  incomeGoalAfter12Months: yup.string().required('Vui lòng nhập mục tiêu thu nhập sau 12 tháng'),

  fileCv: yup
    .mixed<File[]>()
    .test('fileSize', 'File có dung lượng quá lớn', (value: File[] | undefined) => {
      if (!value || !value.length) return true
      return value[0].size < 5120000
    })
});

const vietnamesePosition = {
  idol_livestream: 'Idol Livestream',
  livestream_seller: 'Livestream bán hàng',
  team_lead_seller: 'Trưởng nhóm livestream bán hàng',
  team_lead_idol: 'Trưởng nhóm Idol Livestream',
  hr_admin: 'Hành chính nhân sự'
}

const vietnameseEducation = {
  not_graduated: 'Chưa tốt nghiệp',
  high_school: 'Phổ thông',
  vocational: 'Trung cấp',
  college: 'Cao đẳng',
  university: 'Đại học',
  postgraduate: 'Trên Đại học'
}

function Form() {

  const { register, handleSubmit, control, watch, reset, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(formSchema)
  })

  // const [isShowInformation, setIsShowInformation] = useState(false);
  // const [isShowPersonalAttributes, setIsShowPersonalAttributes] = useState(false);

  // điểm mạnh
  const [strengthsValue, setStrengthsValue] = useState('')
  const strengthsRef = useRef<HTMLTextAreaElement>(null)
  const [isOpenModalStrengths, setIsOpenModalStrengths] = useState(false)

  // điểm yếu
  const [weaknessesValue, setWeaknessesValue] = useState('')
  const weaknessesRef = useRef<HTMLTextAreaElement>(null)
  const [isOpenModalWeaknesses, setIsOpenModalWeaknesses] = useState(false)

  // sở thích/năng khiếu
  const [hobbyValue, setHobbyValue] = useState('')
  const hobbyRef = useRef<HTMLTextAreaElement>(null)
  const [isOpenModalHobby, setIsOpenModalHobby] = useState(false)

  // ước mơ
  const [dreamValue, setDreamValue] = useState('')
  const dreamRef = useRef<HTMLTextAreaElement>(null)
  const [isOpenModalDream, setIsOpenModalDream] = useState(false)

  // kinh nghiệm làm việc
  const [experienceValue, setExperienceValue] = useState('')
  const experienceRef = useRef<HTMLTextAreaElement>(null)
  const [isOpenModalExperience, setIsOpenModalExperience] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const id = useId()

  const allValues = watch()

  useEffect(() => {
    const dataSaved = localStorage.getItem('data')
    if (dataSaved) {
      try {
        const parsed = JSON.parse(dataSaved)
        setStrengthsValue(parsed.strengths)
        setWeaknessesValue(parsed.weaknesses)
        setHobbyValue(parsed.hobby)
        setDreamValue(parsed.dream)
        setExperienceValue(parsed.experience)
        reset(parsed)
      } catch (err) {
        console.error("Error parsing saved form data:", err)
      }

    }
  }, [control])

  useEffect(() => {
    const dataSubmit = {
      ...allValues,
      strengths: strengthsValue,
      weaknesses: weaknessesValue,
      hobby: hobbyValue,
      dream: dreamValue,
      experience: experienceValue
    }
    localStorage.setItem('data', JSON.stringify(dataSubmit))
  }, [allValues])

  const selectedFile = watch('fileCv') as File[]
  const education = watch('education')
  const isShowSchool = education === 'vocational' || education === 'college' || education === 'university' || education === 'postgraduate'

  const onSubmit = async (data: FormValues) => {
    try {
      setIsLoading(true);
      const submitData = {
        ...data,
        position: vietnamesePosition[data.position],
        education: vietnameseEducation[data.education],
        gender: data.gender === 'FEMALE' ? 'Nữ' : data.gender === 'MALE' ? 'Nam' : 'Khác',
        strengths: strengthsValue,
        weaknesses: weaknessesValue,
        hobby: hobbyValue,
        dream: dreamValue,
        experience: experienceValue
      }

      const formData = new FormData()
      formData.append('data', JSON.stringify(submitData))
      if (data.fileCv) {
        formData.append('file', data.fileCv[0])
      }
      await fetch('/api/submit-registration', {
        method: 'POST',
        body: formData,
      });
      toast.success('Bạn đã ứng tuyển thành công!')
    } catch (err) {
      console.log(err)
      toast.error('Có lỗi xảy ra, vui lòng thử lại sau!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Card className="p-8 border-border bg-card">
        <h3 className="text-3xl lg:text-6xl font-bold mb-2 lg:mb-6 text-center text-[#1877f2]">HỒ SƠ ỨNG TUYỂN</h3>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
            <div className="lg:w-[160px]">
              <p>Vị trí ứng tuyển <span className="text-[red]">*</span></p>
            </div>
            <div className="w-full">
              <Controller
                name="position"
                control={control}
                render={({ field }) => {
                  type OptionType = { label: string; value: POSITION_TYPE };
                  const options: OptionType[] = [
                    { label: 'Idol Livestream', value: 'idol_livestream' },
                    { label: 'Livestream bán hàng', value: 'livestream_seller' },
                    { label: 'Trưởng nhóm livestream bán hàng', value: 'team_lead_seller' },
                    { label: 'Trưởng nhóm Idol Livestream', value: 'team_lead_idol' },
                    { label: 'Hành chính nhân sự', value: 'hr_admin' }
                  ];
                  return (
                    <div className="space-y-1 h-12">
                      <Select<OptionType, false>
                        {...field}
                        instanceId={id}
                        options={options}
                        getOptionLabel={option => option.label}
                        getOptionValue={option => option.value}
                        className="h-full"
                        placeholder="Chọn vị trí"
                        onChange={option => field.onChange(option?.value)}
                        value={options.find(option => option.value === field.value)}
                      />
                      {errors.position && (
                        <p className="text-sm text-red-500">{errors.position.message}</p>
                      )}
                    </div>
                  );
                }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-center">
              <div className="flex gap-1 bg-[#1877f2] text-[#1877f2] rounded-xl py-2 justify-center w-full lg:w-1/2">
                <p className="text-white font-bold text-xl">THÔNG TIN CƠ BẢN</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
              <div className="lg:w-[160px]">
                <p>Họ tên <span className="text-[red]">*</span></p>
              </div>
              <Controller
                control={control}
                name="fullName"
                render={({ field }) => (
                  <div className="space-y-1 h-12 w-full">
                    <Input
                      {...field}
                      value={field.value || ''}
                      type="text"
                      placeholder="Họ và tên"
                      className="h-12"
                    />
                    {errors.fullName && (
                      <p className="text-sm text-red-500">{errors.fullName.message}</p>
                    )}
                  </div>
                )}
              />
            </div>
            <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
              <div className="lg:w-[160px]">
                <p>Số điện thoại <span className="text-[red]">*</span></p>
              </div>
              <Controller
                control={control}
                name="phoneNumber"
                render={({ field }) => (
                  <div className="space-y-1 h-12 w-full">
                    <Input
                      {...field}
                      value={field.value || ''}
                      type="text"
                      placeholder="Số điện thoại"
                      className="h-12"
                    />
                    {errors.phoneNumber && (
                      <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>
                    )}
                  </div>
                )}
              />
            </div>
            <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
              <div className="lg:w-[160px]">
                <p>Ngày sinh <span className="text-[red]">*</span></p>
              </div>

              <Controller
                name="dateOfBirth"
                control={control}
                defaultValue={new Date()}
                render={({ field }) => (
                  <div className="space-y-1 h-12 w-full">
                    <div className="border border-[#e1ddde] rounded-lg w-full">
                      <DatePicker
                        locale={vi}
                        className="w-full rounded-full px-4 py-3 outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold"
                        selected={field.value ? new Date(field.value) : null}
                        onChange={(date: Date | null) => field.onChange(date)}
                        dateFormat="dd/MM/yyyy"
                        onBlur={field.onBlur}
                        name={field.name}
                        ref={field.ref}

                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={100}
                      />
                    </div>
                    {errors.dateOfBirth && <p className="text-sm text-red-500">{errors.dateOfBirth.message}</p>}
                  </div>
                )}
              />
            </div>
          </div>
          {/* isShowInformation && ( */}
            <div className="space-y-4">
              <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
                <div className="lg:w-[160px]">
                  <p>Giới tính <span className="text-[red]">*</span></p>
                </div>
                <div className="w-full">
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => {
                      type OptionType = { label: string; value: GENDER_TYPE };
                      const options: OptionType[] = [
                        { label: 'Nam', value: 'MALE' },
                        { label: 'Nữ', value: 'FEMALE' },
                        { label: 'Khác', value: 'OTHER' },
                      ];
                      return (
                        <div className="space-y-1 h-12">
                          <Select<OptionType, false>
                            {...field}
                            instanceId={id}
                            options={options}
                            getOptionLabel={option => option.label}
                            getOptionValue={option => option.value}
                            className="h-full"
                            placeholder="Chọn giới tính"
                            onChange={option => field.onChange(option?.value)}
                            value={options.find(option => option.value === field.value)}
                          />
                          {errors.gender && (
                            <p className="text-sm text-red-500">{errors.gender.message}</p>
                          )}
                        </div>
                      );
                    }}
                  />
                </div>
              </div>

              <div className="mb-8">
                <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
                  <div className="lg:w-[160px]">
                    <p>Số CCCD <span className="text-[red]">*</span></p>
                  </div>
                  <Controller
                    control={control}
                    name="citizenIdentificationNumber"
                    render={({ field }) => (
                      <div className="space-y-1 h-12 w-full">
                        <Input
                          {...field}
                          value={field.value || ''}
                          type="text"
                          placeholder="Số CCCD"
                          className="h-12"
                        />
                        {errors.citizenIdentificationNumber && (
                          <p className="text-sm text-red-500">{errors.citizenIdentificationNumber.message}</p>
                        )}
                      </div>
                    )}
                  />
                </div>
              </div>

              <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
                <div className="lg:w-[160px]">
                  <p>Quê quán <span className="text-[red]">*</span></p>
                </div>
                <Controller
                  control={control}
                  name="hometown"
                  render={({ field }) => (
                    <div className="space-y-1 h-12 w-full">
                      <Input
                        {...field}
                        value={field.value || ''}
                        type="text"
                        placeholder="Quê quán"
                        className="h-12"
                      />
                      {errors.hometown && (
                        <p className="text-sm text-red-500">{errors.hometown.message}</p>
                      )}
                    </div>
                  )}
                />
              </div>

              <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
                <div className="lg:w-[160px]">
                  <p>Nơi ở hiện tại <span className="text-[red]">*</span></p>
                </div>
                <Controller
                  control={control}
                  name="address"
                  render={({ field }) => (
                    <div className="space-y-1 h-12 w-full">
                      <Input
                        {...field}
                        value={field.value || ''}
                        type="text"
                        placeholder="Nơi ở hiện tại"
                        className="h-12"
                      />
                      {errors.address && (
                        <p className="text-sm text-red-500">{errors.address.message}</p>
                      )}
                    </div>
                  )}
                />
              </div>

              <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
                <div className="lg:w-[160px]">
                  <p>Học vấn <span className="text-[red]">*</span></p>
                </div>
                <Controller
                  name="education"
                  control={control}
                  render={({ field }) => {
                    type OptionType = { label: string; value: EDUCATION_TYPE };
                    const options: OptionType[] = [
                      { label: 'Chưa tốt nghiệp', value: 'not_graduated' },
                      { label: 'Phổ thông', value: 'high_school' },
                      { label: 'Trung cấp', value: 'vocational' },
                      { label: 'Cao đẳng', value: 'college' },
                      { label: 'Đại học', value: 'university' },
                      { label: 'Trên Đại học', value: 'postgraduate' },
                    ];
                    return (
                      <div className="space-y-1 h-12 w-full">
                        <Select<OptionType, false>
                          {...field}
                          instanceId={id}
                          options={options}
                          getOptionLabel={option => option.label}
                          getOptionValue={option => option.value}
                          className="h-full"
                          placeholder="Học vấn"
                          onChange={option => field.onChange(option?.value)}
                          value={options.find(option => option.value === field.value)}
                        />
                        {errors.education && (
                          <p className="text-sm text-red-500">{errors.education.message}</p>
                        )}
                      </div>
                    );
                  }}
                />
              </div>

              {isShowSchool && (
                <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
                  <div className="lg:w-[160px]">
                    <p>Tên trường <span className="text-[red]">*</span></p>
                  </div>
                  <Controller
                    control={control}
                    name="school"
                    render={({ field }) => (
                      <div className="space-y-1 h-12 w-full">
                        <Input
                          {...field}
                          value={field.value || ''}
                          type="text"
                          placeholder="Tên trường"
                          className="h-12"
                        />
                        {errors.school && (
                          <p className="text-sm text-red-500">{errors.school.message}</p>
                        )}
                      </div>
                    )}
                  />
                </div>
              )}

              <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
                <div className="lg:w-[160px]">
                  <p>Link tiktok <span className="text-[red]">*</span></p>
                </div>
                <Controller
                  control={control}
                  name="tiktokLink"
                  render={({ field }) => (
                    <div className="space-y-1 h-12 w-full">
                      <Input
                        {...field}
                        value={field.value || ''}
                        type="text"
                        placeholder="Link Tiktok"
                        className="h-12"
                      />
                      {errors.tiktokLink && (
                        <p className="text-sm text-red-500">{errors.tiktokLink.message}</p>
                      )}
                    </div>
                  )}
                />
              </div>

              <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
                <div className="lg:w-[160px]">
                  <p>Link Facebook <span className="text-[red]">*</span></p>
                </div>
                <Controller
                  control={control}
                  name="facebookLink"
                  render={({ field }) => (
                    <div className="space-y-1 h-12 w-full">
                      <Input
                        {...field}
                        value={field.value || ''}
                        type="text"
                        placeholder="Link Facebook"
                        className="h-12"
                      />
                      {errors.facebookLink && (
                        <p className="text-sm text-red-500">{errors.facebookLink.message}</p>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>
          {/* )} */}

          {/* <div className="flex justify-center">
            <div className="flex justify-center cursor-pointer px-4 py-2 rounded-xl text-[#1877f2] bg-[#ccc] hover:opacity-75 duration-300" onClick={() => setIsShowInformation(pre => !pre)}>
              {isShowInformation ? <p>Thu gọn</p> : <p>Xem thêm</p>}
              {isShowInformation ? <ArrowDown className="rotate-180 duration-300" color='currentColor' /> : <ArrowDown className="duration-300" color='currentColor' />}
            </div>
          </div> */}

          <div>
            <div className="flex justify-center">
              <div className="flex gap-1 bg-[#1877f2] text-[#1877f2] rounded-xl py-2 justify-center w-full lg:w-1/2">
                <p className="text-white font-bold text-xl">NĂNG LỰC - SỞ THÍCH</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
              <div className="lg:w-[160px]">
                <p>Điểm mạnh <span className="text-[red]">*</span></p>
              </div>
              <div className="w-full">
                <Alert onClick={() => setIsOpenModalStrengths(true)} className="cursor-pointer">
                  <AlertDescription>{strengthsValue || 'Điểm mạnh'}</AlertDescription>
                </Alert>
              </div>
            </div>

            <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
              <div className="lg:w-[160px]">
                <p>Điểm yếu <span className="text-[red]">*</span></p>
              </div>
              <div className="w-full">
                <Alert onClick={() => setIsOpenModalWeaknesses(true)} className="cursor-pointer">
                  <AlertDescription>{weaknessesValue || 'Điểm yếu'}</AlertDescription>
                </Alert>
              </div>
            </div>

            <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
              <div className="lg:w-[160px]">
                <p>Sở thích/Năng khiếu <span className="text-[red]">*</span></p>
              </div>
              <div className="w-full">
                <Alert onClick={() => setIsOpenModalHobby(true)} className="cursor-pointer">
                  <AlertDescription>{hobbyValue || 'Sở thích/Năng khiếu'}</AlertDescription>
                </Alert>
              </div>
            </div>
          </div>

          {/* {isShowPersonalAttributes && ( */}
            <div className="space-y-4">
              <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
                <div className="lg:w-[160px]">
                  <p>Ước mơ <span className="text-[red]">*</span></p>
                </div>
                <div className="w-full">
                  <Alert onClick={() => setIsOpenModalDream(true)} className="cursor-pointer">
                    <AlertDescription>{dreamValue || 'Ước mơ'}</AlertDescription>
                  </Alert>
                </div>
              </div>

              <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
                <div className="lg:w-[160px]">
                  <p>Nghề nghiệp <span className="text-[red]">*</span></p>
                </div>
                <Controller
                  control={control}
                  name="currentJob"
                  render={({ field }) => (
                    <div className="space-y-1 h-12 w-full">
                      <Input
                        {...field}
                        value={field.value || ''}
                        type="text"
                        placeholder="Nghề nghiệp"
                        className="h-12"
                      />
                      {errors.currentJob && (
                        <p className="text-sm text-red-500">{errors.currentJob.message}</p>
                      )}
                    </div>
                  )}
                />
              </div>

              <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
                <div className="lg:w-[160px]">
                  <p>Kinh nghiệm làm việc <span className="text-[red]">*</span></p>
                </div>
                <div className="w-full">
                  <Alert onClick={() => setIsOpenModalExperience(true)} className="cursor-pointer">
                    <AlertDescription>{experienceValue || 'Kinh nghiệm làm việc'}</AlertDescription>
                  </Alert>
                </div>
              </div>

              <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
                <div className="lg:w-[160px]">
                  <p>Thu nhập trung bình 12 tháng gần nhất <span className="text-[red]">*</span></p>
                </div>
                <Controller
                  control={control}
                  name="income12MonthsAgo"
                  render={({ field }) => (
                    <div className="space-y-1 h-12 w-full">
                      <Input
                        {...field}
                        value={field.value || ''}
                        type="text"
                        placeholder="Thu nhập trung bình 12 tháng gần nhất"
                        className="h-12"
                      />
                      {errors.income12MonthsAgo && (
                        <p className="text-sm text-red-500">{errors.income12MonthsAgo.message}</p>
                      )}
                    </div>
                  )}
                />
              </div>

              <div className="space-y-4">
                <div className="flex gap-1 text-[#1877f2]">
                  <p className="text-[#1877f2]">Mục tiêu thu nhập</p>
                </div>
                <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
                  <div className="lg:w-[160px]">
                    <p>Sau 3 tháng <span className="text-[red]">*</span></p>
                  </div>
                  <Controller
                    control={control}
                    name="incomeGoalAfter3Months"
                    render={({ field }) => (
                      <div className="space-y-1 h-12 w-full">
                        <Input
                          {...field}
                          value={field.value || ''}
                          type="text"
                          placeholder="Sau 3 tháng"
                          className="h-12"
                        />
                        {errors.incomeGoalAfter3Months && (
                          <p className="text-sm text-red-500">{errors.incomeGoalAfter3Months.message}</p>
                        )}
                      </div>
                    )}
                  />
                </div>
                <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
                  <div className="lg:w-[160px]">
                    <p>Sau 6 tháng <span className="text-[red]">*</span></p>
                  </div>
                  <Controller
                    control={control}
                    name="incomeGoalAfter6Months"
                    render={({ field }) => (
                      <div className="space-y-1 h-12 w-full">
                        <Input
                          {...field}
                          value={field.value || ''}
                          type="text"
                          placeholder="Sau 6 tháng"
                          className="h-12"
                        />
                        {errors.incomeGoalAfter6Months && (
                          <p className="text-sm text-red-500">{errors.incomeGoalAfter6Months.message}</p>
                        )}
                      </div>
                    )}
                  />
                </div>
                <div className="flex gap-2 lg:items-center flex-col lg:flex-row mb-8">
                  <div className="lg:w-[160px]">
                    <p>Thu nhập sau 1 năm <span className="text-[red]">*</span></p>
                  </div>
                  <Controller
                    control={control}
                    name="incomeGoalAfter12Months"
                    render={({ field }) => (
                      <div className="space-y-1 h-12 w-full">
                        <Input
                          {...field}
                          value={field.value || ''}
                          type="text"
                          placeholder="Sau 1 năm"
                          className="h-12"
                        />
                        {errors.incomeGoalAfter6Months && (
                          <p className="text-sm text-red-500">{errors.incomeGoalAfter6Months.message}</p>
                        )}
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>
          {/* )} */}

          {/* <div className="flex justify-center">
            <div className="flex justify-center cursor-pointer px-4 py-2 rounded-xl text-[#1877f2] bg-[#ccc] hover:opacity-75 duration-300" onClick={() => setIsShowPersonalAttributes(pre => !pre)}>
              <p>Xem thêm</p>
              {isShowPersonalAttributes ? <ArrowDown className="rotate-180 duration-300" color='currentColor' /> : <ArrowDown className="duration-300" color='currentColor' />}
            </div>
          </div> */}

          <div className="mb-4">
            <div className="flex flex-col mb-2 relative">
              <p className="mb-2 font-semibold">Đính kèm cv của bạn* <span className="font-normal text-xs">(Dung lượng tối đa 5MB)</span></p>
              <label htmlFor="resume" className="w-full py-8 border-2 border-[#ccc] border-dashed text-center hover:bg-[#f8f8f8] duration-300 cursor-pointer">
                <div className="flex flex-col">
                  <input
                    accept="application/pdf"
                    type="file"
                    id="resume"
                    className="inline-block m-auto"
                    {...register('fileCv')}
                  />
                </div>
              </label>
            </div>
            {(selectedFile && selectedFile[0]) && <p className="font-normal text-xs">Dung lượng file hiện tại: {(selectedFile?.[0].size / 1024 / 1024).toFixed(2)} MB</p>}
            <p className="text-[red] text-xs">{errors.fileCv?.message}</p>
          </div>

          <Button type="submit" size="lg" className="w-full h-12 bg-primary hover:bg-primary/90 cursor-pointer" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                <span>Đang gửi...</span>
              </>
            ) : (
              <>
                Gửi đăng ký
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </Card>

      {/* Modal strengths */}
      <Popup
        open={isOpenModalStrengths}
        onClose={() => setIsOpenModalStrengths(false)}
        refValue={strengthsRef}
        setValue={setStrengthsValue}
        value={strengthsValue}
        title="Điểm mạnh của bạn"
      />

      <Popup
        open={isOpenModalWeaknesses}
        onClose={() => setIsOpenModalWeaknesses(false)}
        refValue={weaknessesRef}
        setValue={setWeaknessesValue}
        value={weaknessesValue}
        title="Điểm yếu của bạn"
      />

      <Popup
        open={isOpenModalHobby}
        onClose={() => setIsOpenModalHobby(false)}
        refValue={hobbyRef}
        setValue={setHobbyValue}
        value={hobbyValue}
        title="Sở thích/Năng khiếu của bạn"
      />

      <Popup
        open={isOpenModalDream}
        onClose={() => setIsOpenModalDream(false)}
        refValue={dreamRef}
        setValue={setDreamValue}
        value={dreamValue}
        title="Ước mơ của bạn"
      />

      <Popup
        open={isOpenModalExperience}
        onClose={() => setIsOpenModalExperience(false)}
        refValue={experienceRef}
        setValue={setExperienceValue}
        value={experienceValue}
        title="Kinh nghiệm làm việc của bạn"
      />

      <ToastContainer />
    </>
  )
}

export default Form